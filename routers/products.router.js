const express = require('express');
const productController = require('../controllers/products.controller');
const productSchema = require('../apiSchemasValidators/productSchemaValidator')
const validationMiddleware = require('../validationsMiddleware/productModel.validator');

const router = express.Router();

console.log('reading router');

router.post('/', validationMiddleware.validateProductSchema(productSchema.createProductSchema), productController.handleAddProduct);
router.get('/', productController.handleGetAllProducts);
router.get('/:id', productController.handleGetProductById)

module.exports = router;