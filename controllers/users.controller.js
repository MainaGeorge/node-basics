const {handleSuccessResponse, handleDatabaseErrorResponse} = require('../services/response.services');
const {createUser, fetchUsers} = require('../services/users.service')

module.exports.handlePostUser = (req, res) => {
    createUser(req.body)
        .then(data => handleSuccessResponse(req, res, data))
        .catch(err => handleDatabaseErrorResponse(res, err))
}

module.exports.handleFetchUsers = (req, res) => {
    fetchUsers()
        .then(data => handleSuccessResponse(req, res, data))
        .catch(err => handleDatabaseErrorResponse(res, err));
}