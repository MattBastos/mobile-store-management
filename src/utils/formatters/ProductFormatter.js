class ProductFormatter {
  static formatSimpleProductObject(product) {
    const { name, brand, model, price, color } = product;
    return { name, brand, model, price, color };
  }

  static formatDetailedProductObject(product) {
    const { name, details: { brand, model, color }, price } = product;
    return { name, brand, model, price, color };
  }

  static formatProductObjectsFromList(products) {
    const formattedProducts = [];

    products.forEach((product) => {
      const { name, brand, model, data } = product;

      data.forEach(({ price, color }) => {
        const productObject = { name, brand, model, price, color };
        formattedProducts.push(productObject);
      });
    });

    return formattedProducts;
  }
}

module.exports = ProductFormatter;
