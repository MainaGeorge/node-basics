const express = require('express');
const {handleGetAllProducts, handleGetProductById, handleAddProduct, handleUpdateProductById, handleDeleteProductById} = require('../controllers/products.controller');
const {createProductSchema, updateProductSchema} = require('../apiSchemasValidators/productSchemaValidator');
const {validateQueryString, validateObjectId, validateSchema, validateToken} = require('../validationsMiddleware/schemaValidator');
const {paginationSchema} = require('../apiSchemasValidators/paginationDataValidator');


const router = express.Router();

router.get('/', validateQueryString(paginationSchema), handleGetAllProducts);
router.get('/:id', validateObjectId(), handleGetProductById);
router.post('/', validateToken, validateSchema(createProductSchema), handleAddProduct);
router.put('/:id', validateToken, validateObjectId(), validateSchema(updateProductSchema), handleUpdateProductById)
router.delete('/:id', validateToken, validateObjectId(), handleDeleteProductById);

module.exports = router;