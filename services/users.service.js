const User = require('../database/models/user.model');
const bcrypt = require('bcrypt')

module.exports.createUser = async (userToBeCreated) => {
    const hash = await bcrypt.hash(userToBeCreated.password, 12);
    if(hash){
        const user = {...userToBeCreated, password: hash};
        const createdUser = new User({...user});
        return createdUser.save();
    }
    throw new Error('something went wrong while hashing the password')
}