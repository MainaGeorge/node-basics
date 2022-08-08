const express = require("express");
const compression = require("compression");
const cors = require("cors");

const productRouter = require("./routers/products.router");
const connectDatabase = require("./database/connection");
const Product = require("./database/models/product.model");
const seedProductData = require('./database/seedData/product.seedData')

const app = express();
app.use(cors());
app.use(compression());
app.use(express.json());

app.use(`${process.env.API_VERSION}/products`, productRouter);

connectDatabase()
  .then(() => {
    return Product.countDocuments({}).exec();
  })
  .then((count) => {
    if (count < 3) {
        seedProductData();
    }
  })
  .then(() => {
    app.listen(process.env.PORT, function () {
      console.log(`up and running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => console.log(err));
