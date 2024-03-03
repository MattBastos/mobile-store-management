const joi = require('joi');

const loginSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().min(6).required(),
}).messages({
  'string.empty': '{#label} is required!',
  'string.base': '{#label} needs to be a string!',
  'string.email': 'Incorrect email!',
  'string.min': 'Password length must be at least {#limit} characters long',
});

const createUserSchema = joi.object({
  username: joi.string().min(5).required(),
  email: joi.string().email().required(),
  password: joi.string().min(6).required(),
}).messages({
  'string.empty': '{#label} is required!',
  'string.base': '{#label} needs to be a string!',
  'string.email': 'Incorrect email!',
  'string.min': 'Password length must be at least {#limit} characters long',
});

module.exports = { loginSchema, createUserSchema };