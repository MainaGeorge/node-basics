const Product = require("../models/product.model");

module.exports = function SeedProductData() {
  Product.create([
    { name: "running shoes", price: 30, brand: "Nike" },
    { name: "watch", brand: "germin", price: 45 },
    { name: "running shoes", price: 45, brand: "Puma" },
  ]);
};
