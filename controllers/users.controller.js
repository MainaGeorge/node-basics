const {handleSuccessResponse, handleDatabaseErrorResponse} = require('../services/response.services');
const {createUser, fetchUsers, login} = require('../services/users.service');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

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

module.exports.handleLogIn = (req, res) => {
    let user;
    login(req.body.email)
        .then(dbUser => {
            if(!dbUser) throw new Error("could not find user with that email")
            user = dbUser;
            return bcrypt.compareSync(req.body.password, user.password);
        })
        .then(data => {
            if(!data) throw new Error("username or password is incorrect");
            const payload = {sub: user.id, email: user.email, expiresIn: Math.floor(Date.now() / 1000) + (60 * 60)};
            const privateKey = process.env.APP_SECRET;
            const token = jwt.sign(payload, privateKey)
            return res.status(200).json({message: "successful sign in", status: 200, body: { token }})
        })
        .catch(err => console.log(err))
}
