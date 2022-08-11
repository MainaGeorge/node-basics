const {
  handleSuccessResponse,
  handleErrorResponse,
} = require("../services/response.services");
const { createUser, fetchUsers, logIn } = require("../services/users.service");

module.exports.handlePostUser = (req, res) => {
  createUser(req.body)
    .then((data) => handleSuccessResponse(req, res, data))
    .catch((err) => handleErrorResponse(res, err));
};

module.exports.handleFetchUsers = (req, res) => {
  fetchUsers()
    .then((data) => handleSuccessResponse(req, res, data))
    .catch((err) => handleErrorResponse(res, err));
};

module.exports.handleLogin = (req, res) => {
  logIn(req.body)
    .then((data) => handleSuccessResponse(req, res, data))
    .catch((err) => handleErrorResponse(res, err));
};
