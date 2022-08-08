const usersRouter = require('express').Router();
const {handlePostUser} = require('../controllers/users.controller');
const {validateSchema} = require('../validationsMiddleware/schemaValidator');
const {createUserSchema} = require('../apiSchemasValidators/userSchemaValidator')


usersRouter.post("/", validateSchema(createUserSchema), handlePostUser);


module.exports = usersRouter;