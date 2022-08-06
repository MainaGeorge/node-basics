const productService = require('../services/products.service');

module.exports.handleAddProduct = function(req, res) {
   productService.addProduct(req.body)
       .then(product => {
           return res.status(201).send({
               message: 'product added successfully',
               status: 201,
               body: product.toObject()
           });
       })
       .catch(error => {
           return res.status(error.status).send({
                message: error.message,
               status: error.status,
               body: {}
           })
       });
}

module.exports.handleGetAllProducts = function (req, res){
    productService.fetchAllProducts(req.query).then(products => {
        return res.json(products);
    }).catch(err => {
        return res.json(err);
    })
}

module.exports.handleGetProductById = function (req, res){
    const id  = req.params['id'];
    productService.fetchById(id).then(prod => {
        if(prod){
            return res.json(prod);
        }
        return res.json({
            message: 'could not find product with id ' + id,
            status: 404,
            body: prod
        })
    }).catch(err => {
        res.json(err);
    });
}