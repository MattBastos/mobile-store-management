class ProductController {
  constructor(service) {
    this.service = service;
  }

  async getAllProducts(_req, res, next) {
    try {
      const allProducts = await this.service.getAllProducts();

      return res.status(200).json(allProducts);
    } catch (error) {
      next(error);
    }
  }

  async createSimpleProduct(req, res, next) {
    try {
      const newProduct = await this.service.createSimpleProduct(req.body);

      return res.status(newProduct.statusCode).json(newProduct.message);
    } catch (error) {
      next(error);
    }
  }

  async createDetailedProduct(req, res, next) {
    try {
      const newProduct = await this.service.createDetailedProduct(req.body);

      return res.status(newProduct.statusCode).json(newProduct.message);
    } catch (error) {
      next(error);
    }
  }

  async createManyProducts(req, res, next) {
    try {
      const newProducts = await this.service.createManyProducts(req.body);

      return res.status(newProducts.statusCode).json(newProducts.message);
    } catch (error) {
      next(error);
    }
  }

  async updateProduct(req, res, next) {
    try {
      const { id } = req.params;
      const updatedProduct = await this.service.updateProduct(id, req.body);

      return res.status(updatedProduct.statusCode).json(updatedProduct.message);
    } catch (error) {
      next(error);
    }
  }

  async deleteProduct(req, res, next) {
    try {
      const { id } = req.params;

      await this.service.deleteProduct(id);

      return res.status(204).end();
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ProductController;
