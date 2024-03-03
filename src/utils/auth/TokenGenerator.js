import { jwt } from "jsonwebtoken";
import { readFileSync } from "fs";

const secret = readFileSync('./jwt.evaluation.key');

export class TokenGenerator {
  static generateToken(user) {
    const payload = {
      username: user.username,
      email: user.email,
    };

    return jwt.sign(
      payload,
      secret,
      { algorithm: 'HS256', expiresIn: '7d' },
    );
  }
}
