const bcrypt = require('bcrypt');
const UserValidator = require('../utils/validations/UserValidator.js');
const TokenGenerator = require("../utils/auth/TokenGenerator.js");

class UserService {
  constructor(model) {
    this.model = model;
  }

  async login(email, password) {
    try {
      const user = await this.model.findOne({ where: { email } });
      const userLoginValidation = await UserValidator.validateLogin(user, email, password);

      if (userLoginValidation) {
        return {
          statusCode: userLoginValidation.statusCode,
          message: userLoginValidation.message
        };
      }

      const token = TokenGenerator.generateToken(user);

      return {
        id: user.id,
        name: user.name,
        email,
        token,
      };
    } catch (error) {
      return { statusCode: 500, message: 'Internal Server Error' };
    }
  }

  async createUser(user) {
    try {
      const existingUser = await this.model.findOne({ where: { email: user.email } });
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

module.exports = UserService;
