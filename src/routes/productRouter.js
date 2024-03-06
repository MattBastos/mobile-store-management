const { Router } = require('express');
const UserValidator = require('../utils/validations/UserValidator.js');
const productFactory = require('../factories/ProductFactory.js');

const productRouter = Router();

productRouter.get(
  '/products/:id',
  UserValidator.validateToken,
  (req, res, next) => productFactory.getProductById(req, res, next)
);

productRouter.get(
  '/products',
  UserValidator.validateToken,
  (req, res, next) => productFactory.getAllProducts(req, res, next)
);

productRouter.post(
  '/simpleProduct',
  UserValidator.validateToken,
  (req, res, next) => productFactory.createSimpleProduct(req, res, next)
);

productRouter.post(
  '/detailedProduct',
  UserValidator.validateToken,
  (req, res, next) => productFactory.createDetailedProduct(req, res, next)
);

productRouter.post(
  '/manyProducts',
  UserValidator.validateToken,
  (req, res, next) => productFactory.createManyProducts(req, res, next)
);

productRouter.put(
  '/products/:id',
  UserValidator.validateToken,
  (req, res, next) => productFactory.updateProduct(req, res, next)
);

productRouter.delete(
  '/products/:id',
  UserValidator.validateToken,
  (req, res, next) => productFactory.deleteProduct(req, res, next)
);

module.exports = productRouter;
