import md5 from "md5";
import jwt from "jsonwebtoken";
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

  static validateToken(req, res, next) {
    try {
      const authorizationHeader  = req.header('Authorization');
      
      if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Token not found or invalid format!' });
      }

      const token = authorizationHeader.substring(7);
      const secret = process.env.JWT_SECRET;

      jwt.verify(token, secret, (err, decoded) => {
        if (err) {
          if (err.name === 'TokenExpiredError') {
            return res.status(401).json({ message: 'Token has expired!' });
          } else {
            return res.status(401).json({ message: 'Token is not valid!' });
          }
        }

        req.user = decoded;
        next();
      });
    } catch (err) {
      return res.status(500).json({ message: 'Internal Server Error!' });
    }
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
