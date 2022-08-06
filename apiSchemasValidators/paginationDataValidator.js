const joi = require('joi');

module.exports.paginationSchema = joi.object({
    pageNumber: joi.string(),
    pageSize: joi.string()
})