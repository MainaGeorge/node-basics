const Product = require('../database/models/product.model')

module.exports.addProduct = async function(productData){
    let product = new Product({...productData})
    return await product.save();
}

module.exports.fetchAllProducts = async function (){
    return Product.find({});
}