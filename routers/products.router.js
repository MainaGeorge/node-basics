const express = require('express');
const productController = require('../controllers/products.controller')

const router = express.Router();

console.log('reading router');

router.post('/', productController.handleAddProduct);
router.get('/', productController.handleGetAllProducts)

module.exports = router;