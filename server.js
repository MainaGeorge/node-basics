const express = require('express');
const compression = require('compression');
const cors = require('cors');

const productRouter = require('./routers/products.router')
const connectDatabase = require('./database/connection');


connectDatabase()
    .then(() => console.log('database online'))
    .catch(err => console.log(err));

const app = express();

app.use(cors());
app.use(compression());
app.use(express.json());

// app.use((req, res, next) => {
//     next();
// });

app.use(`${process.env.API_VERSION}/products`, productRouter);

app.listen(process.env.PORT, function(){
    console.log(`up and running on port ${process.env.PORT} ${process.env.CONNECTION_STRING}`)
})

