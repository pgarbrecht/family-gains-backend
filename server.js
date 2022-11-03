// SERVER, DB CONFIGURATION
// use express (restful api framework), assign app variable for it
const express = require('express');
const app = express();
// import our model
const Products = require('./models/products.js')
// use dotenv to store secret info 
require('dotenv').config()
const PORT = process.env.PORT
// use mongDB for database, mongoose for schema
const mongoose = require('mongoose');
const mongoURI = process.env.MONGODB_URI
mongoose.connect(mongoURI);
mongoose.connection.once('open', () => {
   console.log('connected to mongo');
});
// method override let's us use REST verbs (PUT, etc) even if client doesn't support it
const methodOverride = require('method-override');

// MIDDLEWARE
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'))

// connect controllers for route logic
const productController = require('./controllers/productController.js')
app.use('/store', productController)

// ROUTES
app.get('/', (req, res) => {
    res.send('server working')
});

// express app listens on port and confirms server is running
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});