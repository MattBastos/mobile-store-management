const ProductFormatter = require('../utils/formatters/ProductFormatter.js');
const ProductValidator = require('../utils/validations/ProductValidator.js');
const { Product } = require('../database/models/index.js');

class ProductService {
  constructor(model) {
    this.model = model;
  }

  async getAllProducts() {
    const allProducts = await this.model.findAll();
    return allProducts.map((product) => product.dataValues);
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

  async createManyProduct(products) {
    const formattedProducts = ProductFormatter.formatProductObjectsFromList(products);
    
    formattedProducts.forEach((formattedProduct) => {
      const productCreationValidation = ProductValidator.validateProductData(formattedProduct);

      if (productCreationValidation) {
        return {
          statusCode: productCreationValidation.statusCode,
          message: productCreationValidation.message,
        }
      }
    });
    
    const newProducts = await this.model.bulkCreate(formattedProducts);

    return {
      statusCode: 201,
      message: newProducts,
    };
  }

  async updateProduct(id, product) {
    const formattedProduct = ProductFormatter.formatSimpleProductObject(product);
    const productUpdateValidation = ProductValidator.validateProductData(formattedProduct);

    if (productUpdateValidation) {
      return {
        statusCode: productUpdateValidation.statusCode,
        message: productUpdateValidation.message,
      }
    }

    const updatedProduct = await this.model.update({ ...formattedProduct }, { where: { id } });

    return {
      statusCode: 200,
      message: updatedProduct,
    }
  }

  async deleteProduct(id) {
    await this.model.destroy({ where: { id } });
  }
}

module.exports = ProductService;
