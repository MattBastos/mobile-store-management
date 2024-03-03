import md5 from "md5";
import { UserValidator } from "../utils/validations/UserValidator";
import { TokenGenerator } from "../utils/auth/TokenGenerator";

export class UserService {
  constructor(model) {
    this.model = model;
  }

  async createUser(user) {
    const existingUser = await this.model.getUserByEmail(user.email);
    const { statusCode, message } = UserValidator.validateUserCreation(existingUser, user);

    if (statusCode) return { statusCode, message };

    const hashedPassword = md5(user.password);
    const {password: _, ...newUserData } = user;
    const newUser = await this.model.create({ ...newUserData, password: hashedPassword });
    const token = TokenGenerator.generateToken(newUser);

    return {
      userName: newUserData.username,
      email: newUserData.email,
      token
    };
  }
}