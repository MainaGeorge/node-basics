const joi = require('joi');

module.exports.createUserSchema = joi.object({
  email: joi.email().required(),
  password: joi.string().required().alphanum(),
  username: joi.string().required().max(15),
  confirmPassword: joi.ref("password"),
});