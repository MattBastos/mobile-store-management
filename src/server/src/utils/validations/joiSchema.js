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

const createAndUpdateProductSchema = joi.object({
  name: joi.string().required(),
  brand: joi.string().required(),
  model: joi.string().required(),
  price: joi.number().positive().required(),
  color: joi.string().required(),
}).messages({
  'string.empty': '{#label} is required!',
  'string.base': '{#label} needs to be a string!',
  'number.base': '{#label} needs to be a number!',
  'number.positive': '{#label} must be a positive number!',
  'number.precision': '{#label} must have at most 2 decimal places',
});

module.exports = {
  loginSchema,
  createUserSchema,
  createAndUpdateProductSchema
};
