# node-express-api
This is an app to test building an api with nodejs and express framework
The app uses mongodb for storing data. You need to set up the connection string to mongodb to use it.
The app is a RESTful API CRUD operations on a model product with validations using Joi library and custom validation middlewares.

annonymous user can list out the products from the database
annonymous user can get a product by id
logged in user can update or delete products
logged in user can see a list of all other users

You have to create a config file called .env at the root of the project. The file should hold the values:
PORT=port number you wish to run the api on
CONNECTION_STRING="mongodb connection string"
API_VERSION="/api/v1"
APP_SECRET="YOUR SECURE SECRET HERE"
