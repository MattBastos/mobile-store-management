class UserController {
  constructor(service) {
    this.service = service;
  }

  async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const user = await this.service.login(email, password);

      return res.status(user.statusCode).json(user.message);
    } catch (error) {
      next(error);
    }
  }

  async createUser(req, res, next) {
    try {
      const newUser = await this.service.createUser(req.body);

      return res.status(newUser.statusCode).json(newUser.message);
    } catch (error) {
      next(error);
    }
  } 
}

module.exports = UserController;
