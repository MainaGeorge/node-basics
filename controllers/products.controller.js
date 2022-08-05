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
    // return res.status(200).json({name: 'new product', price: 30})
}

module.exports.handleGetAllProducts = function (req, res){
    productService.fetchAllProducts().then(products => {
        return res.json(products);
    }).catch(err => {
        return res.json(err);
    })
}