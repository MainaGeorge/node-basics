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