const { User } = require('../database/models');
const UserService = require('../services/UserService.js');
const UserController = require('../controllers/UserController.js');

const userService = new UserService(User);
const userController = new UserController(userService);

module.exports = userController;
