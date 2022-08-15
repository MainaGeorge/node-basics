const joi = require('joi');

module.exports.createUserSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required().alphanum(),
  username: joi.string().required().max(15),
  confirmPassword: joi.ref("password"),
});

module.exports.loginUserSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required().alphanum()
})