const { Router } = require('express');
const UserValidator = require('../utils/validations/UserValidator.js');
const userFactory = require('../factories/UserFactory.js');

const userRouter = Router();

userRouter.post('/login', (req, res, next) => userFactory.login(req, res, next));

userRouter.post('/register', (req, res, next) => userFactory.createUser(req, res, next));

module.exports = userRouter;
