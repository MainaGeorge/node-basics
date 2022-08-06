const validateObjectAgainstSchema =  async (objectToValidate, schemaToValidateAgainst) => {
    return schemaToValidateAgainst.validateAsync(objectToValidate, {convert: false, abortEarly: false});
}

module.exports.validateProductSchema = (productSchema) => {
    return function(req, res, next){
        validateObjectAgainstSchema(req.body, productSchema)
            .then(_ => next())
            .catch(err => {
                const errors = err.details.map(err => err.message);
                return res.status(422).json({
                    status: 422,
                    message: 'unprocessable model',
                    body: errors
                })
            });
    }
}

module.exports.validateQueryString = (paginationSchema) => {
    return (req, res, next) => {
        validateObjectAgainstSchema(req.query, paginationSchema)
            .then(_ => {
                next()
            })
            .catch(err => {
                const errors = err.details.map(e => e.message);
                res.status(400).json({status: 400, body: errors, message: 'you entered query parameters not allowed'})
            })
    }
}