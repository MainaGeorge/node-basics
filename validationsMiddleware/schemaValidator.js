const mongoose = require('mongoose');

const validateObjectAgainstSchema =  async (objectToValidate, schemaToValidateAgainst) => {
    return schemaToValidateAgainst.validateAsync(objectToValidate, {convert: false, abortEarly: false});
}

module.exports.validateSchema = (schemaToValidateAgainst) => {
    return function(req, res, next){
        validateObjectAgainstSchema(req.body, schemaToValidateAgainst)
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

module.exports.validateObjectId = () => {
    return function(req, res, next){
        const id = req.params['id'];
        if(mongoose.Types.ObjectId.isValid(id)){
            next();
        }else{
            return res.status(400).json({
                message: 'invalid object id',
                status: 400
            })
        }
    }
}

module.exports.validateToken = function(req, res, next){
    const authHeaderValue = req.headers['authorization'];
    if(!authHeaderValue){
        return res.status(401).json({
            message: 'you need to be logged in to perform that action',
            status: 401
        })
    }

    next();
}