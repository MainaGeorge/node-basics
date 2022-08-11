const usersRouter = require('express').Router();
const {handlePostUser, handleFetchUsers, handleLogin} = require('../controllers/users.controller');
const {validateSchema} = require('../validationsMiddleware/schemaValidator');
const {createUserSchema, loginUserSchema} = require('../apiSchemasValidators/userSchemaValidator')

usersRouter.get('/', handleFetchUsers)
usersRouter.post("/", validateSchema(createUserSchema), handlePostUser);
usersRouter.post("/login", validateSchema(loginUserSchema), handleLogin);


module.exports = usersRouter;
