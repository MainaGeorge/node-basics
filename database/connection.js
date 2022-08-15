const mongoose = require("mongoose");
const Product = require("./models/product.model");
const {seedProductData, seedUserData
} = require("./seedData/seedData");

require("dotenv").config({ path: "./.env" });

module.exports = async function connect() {
  return await mongoose
    .connect(process.env.CONNECTION_STRING, {
      dbName: "node_api",
      useNewUrlParser: true,
    })
    .then(() => {
      return Product.countDocuments({}).exec();
    })
    .then((count) => {
      if (count < 3) {
        seedProductData();
        seedUserData();
      }
    });
};
