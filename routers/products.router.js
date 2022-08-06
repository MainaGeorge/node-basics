const express = require('express');
const productController = require('../controllers/products.controller');
const {createProductSchema} = require('../apiSchemasValidators/productSchemaValidator');
const validationMiddleware = require('../validationsMiddleware/productModel.validator');
const {paginationSchema} = require('../apiSchemasValidators/paginationDataValidator')

const router = express.Router();

router.post('/', validationMiddleware.validateProductSchema(createProductSchema), productController.handleAddProduct);
router.get('/', validationMiddleware.validateQueryString(paginationSchema), productController.handleGetAllProducts);
router.get('/:id', productController.handleGetProductById)

module.exports = router;