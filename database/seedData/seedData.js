const Product = require("../models/product.model");
const User = require('../models/user.model');

module.exports.seedProductData = function seedProducts() {
  Product.create([
    { name: "running shoes", price: 30, brand: "Nike" },
    { name: "watch", brand: "germin", price: 45 },
    { name: "running shoes", price: 45, brand: "Puma" },
  ]);
};

module.exports.seedUserData = function seedUsers() {
  User.create([
    {name: 'test@test.com', password: 'Password1', username: 'hero'},
    {name: 'bat@test.com', password: 'Password1', username: 'batman'},
    {name: 'super@test.com', password: 'Password1', username: 'superman'}
  ])
}
