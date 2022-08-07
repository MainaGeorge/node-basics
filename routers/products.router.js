const express = require('express');
const {handleGetAllProducts, handleGetProductById, handleAddProduct, handleUpdateProductById, handleDeleteProductById} = require('../controllers/products.controller');
const {createProductSchema, updateProductSchema} = require('../apiSchemasValidators/productSchemaValidator');
const {validateQueryString, validateObjectId, validateSchema} = require('../validationsMiddleware/productModel.validator');
const {paginationSchema} = require('../apiSchemasValidators/paginationDataValidator');


const router = express.Router();

router.get('/', validateQueryString(paginationSchema), handleGetAllProducts);
router.get('/:id', validateObjectId(), handleGetProductById);
router.post('/', validateSchema(createProductSchema), handleAddProduct);
router.put('/:id', validateObjectId(), validateSchema(updateProductSchema), handleUpdateProductById)
router.delete('/:id', validateObjectId(), handleDeleteProductById);

module.exports = router;