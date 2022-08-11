const User = require("../database/models/user.model");
const bcrypt = require("bcrypt");

module.exports.createUser = async (userToBeCreated) => {
  const emailExists = await User.exists({ email: userToBeCreated.email });
  if (emailExists) return Promise.reject(new Error("email already exists please select a new one"));

  const usernameExists = await User.exists({ username: userToBeCreated.username });
  if (usernameExists) return Promise.reject(new Error("username already exists please select a new one"));

  const hash = await bcrypt.hash(userToBeCreated.password, 12);
  if (hash) {
    const user = { ...userToBeCreated, password: hash };
    const createdUser = new User({ ...user });
    return createdUser.save();
  }
  return new Error("something went wrong while hashing the password");
};

module.exports.logIn = async ({ username, password }) => {
  console.log("in log in ", username, password);
};

module.exports.fetchUsers = () => {
  return User.find({});
};
