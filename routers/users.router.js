const usersRouter = require('express').Router();
const {handlePostUser} = require('../controllers/users.controller')


usersRouter.post("/", handlePostUser);


module.exports = usersRouter;