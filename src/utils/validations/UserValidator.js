import md5 from "md5";
import { loginSchema, createUserSchema } from './joiSchema';

export class UserValidator {
  static validateLogin(user, email, password) {
    const { error } = loginSchema.validate({ email, password });

    if (error) return { statusCode: 400, message: error.details[0].message }

    if (!user) return { statusCode: 404, message: 'This user does not exists!' }

    const hashedPassword = md5(password);

    if (user.password !== hashedPassword) return { statusCode: 401, message: 'Incorrect password!' }

    return null;
  }

  static validateUserCreation(existingUser, newUserData) {
    const { error } = createUserSchema.validate(newUserData);

    if (error) return { statusCode: 400, message: error.details[0].message }

    if (existingUser) {
      const { email } = existingUser;
      if (email === newUserData.email) return { statusCode: 409, message: 'This email already exists!' };
    }

    return null;
  }
}
