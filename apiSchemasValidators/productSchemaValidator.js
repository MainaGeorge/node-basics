const joi = require('joi');

module.exports.createProductSchema = joi.object({
    name: joi.string().required().max(50),
    price: joi.number().required(),
    brand: joi.string().required().max(30)
})