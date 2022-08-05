const express = require('express');
const connectDatabase = require('./database/connection')

connectDatabase()
    .then(() => console.log('database online'))
    .catch(err => console.log(err));

const app = express();

app.use(express.json());
app.get('/', (req, res, next) => {
    return res.status(200).json({status: 200, message: 'you have arrived at your destination'})
})

app.listen(process.env.PORT, function(){
    console.log(`up and running on port ${process.env.PORT} ${process.env.CONNECTION_STRING}`)
})

