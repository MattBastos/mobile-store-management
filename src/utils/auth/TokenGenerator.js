require('dotenv').config();

const jwt = require("jsonwebtoken");

class TokenGenerator {
  static generateToken(user) {
    try {
      const secret = process.env.JWT_SECRET;

      const payload = {
        username: user.username,
        email: user.email,
      };

      return jwt.sign(payload, secret, { algorithm: 'HS256', expiresIn: '7d' });
    } catch (error) {
      console.error('Error reading secret key: ', error.message);
      throw new Error('Error generating token!');
    }
  }
}

module.exports = TokenGenerator;
