const express = require('express');
const compression = require('compression');
const cors = require('cors');

const productRouter = require('./routers/products.router')
const connectDatabase = require('./database/connection');

const app = express();
app.use(cors());
app.use(compression());
app.use(express.json());

app.use(`${process.env.API_VERSION}/products`, productRouter);

connectDatabase()
    .then(() => {
        app.listen(process.env.PORT, function(){
            console.log(`up and running on port ${process.env.PORT}`)
        })
    })
    .catch(err => console.log(err));


