const { Router } = require('express');
const UserValidator = require('../utils/validations/UserValidator.js');
const userFactory = require('../factories');

const userRouter = Router();

userRouter.post(
  '/login',
  UserValidator.validateToken,
  (req, res, next) => userFactory.login(req, res, next)
);

userRouter.post(
  '/register',
  UserValidator.validateToken,
  (req, res, next) => userFactory.createUser(req, res, next)
);

module.exports = userRouter;
