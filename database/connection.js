const mongoose = require('mongoose');
require('dotenv').config({path: './.env'});

module.exports = async function connect(){
   return await mongoose.connect(process.env.CONNECTION_STRING, {
        dbName: 'node_api',
       useNewUrlParser: true
    })
}

