const { createAndUpdateProductSchema } = require('./joiSchema.js');

class ProductValidator {
  static validateProductData(product) {
    const { error } = createAndUpdateProductSchema.validate(product);
    if (error) return { statusCode: 400, message: error.details[0].message }
  }
}

module.exports = ProductValidator;
