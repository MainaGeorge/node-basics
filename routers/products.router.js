const express = require('express');
const productController = require('../controllers/products.controller');
const {createProductSchema, updateProductSchema} = require('../apiSchemasValidators/productSchemaValidator');
const validationMiddleware = require('../validationsMiddleware/productModel.validator');
const {paginationSchema} = require('../apiSchemasValidators/paginationDataValidator');


const router = express.Router();

router.get('/', validationMiddleware.validateQueryString(paginationSchema), productController.handleGetAllProducts);
router.get('/:id', validationMiddleware.validateObjectId(), productController.handleGetProductById);
router.post('/', validationMiddleware.validateSchema(createProductSchema), productController.handleAddProduct);
router.put('/:id', validationMiddleware.validateObjectId(), validationMiddleware.validateSchema(updateProductSchema), productController.handleUpdateProductById)
router.delete('/:id', validationMiddleware.validateObjectId(), productController.handleDeleteProductById);

module.exports = router;