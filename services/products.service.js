const Product = require('../database/models/product.model')

module.exports.addProduct = async function(productData){
    let product = new Product({...productData})
    return await product.save();
}

module.exports.fetchAllProducts = async function ({pageNumber=1, pageSize=5}){
    pageSize = parseInt(pageSize);
    pageNumber = parseInt(pageNumber);

    const skip = (pageNumber - 1) * pageSize;
    return Product.find({}).skip(skip).limit(pageSize);
}

module.exports.fetchById = function(id){
    return Product.findById(id);
}