const usersRouter = require('express').Router();
const {handlePostUser, handleFetchUsers, handleLogIn} = require('../controllers/users.controller');
const {validateSchema, validateToken} = require('../validationsMiddleware/schemaValidator');
const {createUserSchema, loginUserSchema} = require('../apiSchemasValidators/userSchemaValidator')

usersRouter.get('/', validateToken, handleFetchUsers)
usersRouter.post("/", validateSchema(createUserSchema), handlePostUser);
usersRouter.post("/login", validateSchema(loginUserSchema), handleLogIn)


module.exports = usersRouter;