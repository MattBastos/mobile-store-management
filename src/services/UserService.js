import bcrypt from 'bcrypt';
import { UserValidator } from "../utils/validations/UserValidator";
import { TokenGenerator } from "../utils/auth/TokenGenerator";

export class UserService {
  constructor(model) {
    this.model = model;
  }

  async createUser(user) {
    try {
      const existingUser = await this.model.getUserByEmail(user.email);
      const userCreationValidation = UserValidator.validateUserCreation(existingUser, user);

      if (userCreationValidation) {
        return {
          statusCode: userCreationValidation.statusCode,
          message: userCreationValidation.message
        };
      }

      const hashedPassword = await bcrypt.hash(user.password, 10);

      const {password: _, ...newUserData } = user;
      const newUser = await this.model.create({ ...newUserData, password: hashedPassword });
      const token = TokenGenerator.generateToken(newUser);

      return {
        userName: newUserData.username,
        email: newUserData.email,
        token
      };
    } catch (error) {
      return { statusCode: 500, message: 'Internal Server Error' };
    }
  }
}