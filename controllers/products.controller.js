const productService = require('../services/products.service');

module.exports.handleAddProduct = function(req, res) {
   productService.addProduct(req.body)
       .then(product => {
           return res.status(201).json({
               message: 'product added successfully',
               status: 201,
               body: product
           });
       })
       .catch(error => {
           return res.status(error.status).send({
                message: 'something went wrong while performing the operation',
               status: 500,
           })
       });
}

module.exports.handleGetAllProducts = function (req, res){
    productService.fetchAllProducts(req.query).then(data => handleSingleProductSuccessResponse(res, data))
        .catch(err => handleSingleProductErrorResponse(res, err))
}

module.exports.handleGetProductById = function (req, res){
    const id  = req.params['id'];
    productService.fetchById(id)
        .then(data => handleSingleProductSuccessResponse(res, data))
        .catch(err => handleSingleProductErrorResponse(res, err));
}

module.exports.handleUpdateProductById = function(req, res){
    const id = req.params['id'];
    productService.updateProduct(id, req.body)
        .then(data => handleSingleProductSuccessResponse(res, data))
        .catch(err => handleSingleProductErrorResponse(res, err))
}


module.exports.handleDeleteProductById = function(req, res){
    const id = req.params['id'];
    productService.deleteById(id)
        .then(data => handleSingleProductSuccessResponse(res, data))
        .catch(err => handleSingleProductErrorResponse(res, err))
}

const handleSingleProductSuccessResponse = (res, data) => {
    if(data) {
        return res.status(200).json({
            body: data,
            message: 'operation performed successfully',
            status: 200
        })
    }

     return res.json({
        message: 'could not find the requested product',
        status: 404,
    })
}

const handleSingleProductErrorResponse = function(res, error){
    return res.status(500).json({
        message: 'something went wrong while performing the database operation',
        status: 500,
        body: error
    })
}