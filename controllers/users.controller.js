const {handleSuccessResponse, handleDatabaseErrorResponse} = require('../services/response.services');
const {createUser} = require('../services/users.service')

module.exports.handlePostUser = (req, res) => {
    createUser(req.body)
        .then(data => handleSuccessResponse(req, res, data))
        .catch(err => handleDatabaseErrorResponse(res, err))
}
