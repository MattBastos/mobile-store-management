const { Product } = require('../database/models/index.js');
const ProductService = require('../services/ProductService.js');
const ProductController = require('../controllers/ProductController.js');

const productService = new ProductService(Product);
const productController = new ProductController(productService);

module.exports = productController;
