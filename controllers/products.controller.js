const productService = require('../services/products.service');

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

const handleSuccessResponse = (req, res, data) => {
    const httpMethod = req.method;
    if(data && httpMethod === 'GET'){
        return res.status(200).json({
            body: data,
            message: 'operation performed successfully',
            status: 200
        })
    }
    if(data && httpMethod === 'POST'){
        return res.status(201).json({
            message: 'product added successfully',
            status: 201,
            body: data
        });
    }

    if(data && (httpMethod === 'PUT' || httpMethod === 'DELETE')) {
        return res.status(204).json();
    }

     return res.json({
        message: 'could not find the requested product(s)',
        status: 404,
    })
}

const handleDatabaseErrorResponse = function(res, error){
    return res.status(500).json({
        message: 'something went wrong while performing the database operation',
        status: 500,
        body: error
    })
}