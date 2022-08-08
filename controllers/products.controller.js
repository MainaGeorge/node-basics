const productService = require('../services/products.service');
const {handleSuccessResponse, handleDatabaseErrorResponse} = require('../services/response.services')

module.exports.handleAddProduct = function(req, res) {
   productService.addProduct(req.body)
       .then(data => handleSuccessResponse(req, res, data))
       .catch(err => handleDatabaseErrorResponse(res, err));
}

module.exports.handleGetAllProducts = function (req, res){
    productService.fetchAllProducts(req.query)
        .then(data => handleSuccessResponse(req, res, data))
        .catch(err => handleDatabaseErrorResponse(res, err))
}

module.exports.handleGetProductById = function (req, res){
    const id  = req.params['id'];
    productService.fetchById(id)
        .then(data => handleSuccessResponse(req, res, data))
        .catch(err => handleDatabaseErrorResponse(res, err));
}

module.exports.handleUpdateProductById = function(req, res){
    const id = req.params['id'];
    productService.updateProduct(id, req.body)
        .then(data => handleSuccessResponse(req, res, data))
        .catch(err => handleDatabaseErrorResponse(res, err))
}

module.exports.handleDeleteProductById = function(req, res){
    const id = req.params['id'];
    productService.deleteById(id)
        .then(data => handleSuccessResponse(req, res, data))
        .catch(err => handleDatabaseErrorResponse(res, err))
}



