const ProductFormatter = require('../utils/formatters/ProductFormatter.js');
const ProductValidator = require('../utils/validations/ProductValidator.js');
const { Product } = require('../database/models/index.js');

class ProductService {
  constructor(model) {
    this.model = model;
  }

  async createSimpleProduct(product) {
    const formattedProduct = ProductFormatter.formatSimpleProductObject(product);
    const productCreationValidation = ProductValidator.validateProductData(formattedProduct);

    if (productCreationValidation) {
      return {
        statusCode: productCreationValidation.statusCode,
        message: productCreationValidation.message,
      }
    }

    const newProduct = await this.model.create(formattedProduct);

    return {
      statusCode: 201,
      message: newProduct,
    };
  }

  async createDetailedProduct(product) {
    const formattedProduct = ProductFormatter.formatDetailedProductObject(product);
    const productCreationValidation = ProductValidator.validateProductData(formattedProduct);

    if (productCreationValidation) {
      return {
        statusCode: productCreationValidation.statusCode,
        message: productCreationValidation.message,
      }
    }

    const newProduct = await this.model.create(formattedProduct);

    return {
      statusCode: 201,
      message: newProduct,
    };
  }
}

module.exports = ProductService;
