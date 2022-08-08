const usersRouter = require('express').Router();
const {handlePostUser, handleFetchUsers} = require('../controllers/users.controller');
const {validateSchema} = require('../validationsMiddleware/schemaValidator');
const {createUserSchema} = require('../apiSchemasValidators/userSchemaValidator')

usersRouter.get('/', handleFetchUsers)
usersRouter.post("/", validateSchema(createUserSchema), handlePostUser);


module.exports = usersRouter;