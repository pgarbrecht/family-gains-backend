// set up server variables/external modules
const express = require('express');
const app = express();
app.use(express.json());
const methodOverride = require('method-override');
const cors = require('cors');
// import our model
const Products = require('./models/products.js');
// INTERNAL MODULES
// const productController = require('./controllers/productController.js')
// app.use('/store', productController)
const routes = require('./routes');
//ROUTES
// sending the default route over to the controller
app.use('/products', routes.products);
// can add additional controllers here
// environment variables
require('dotenv').config();
const PORT = process.env.PORT;
// Setup Cors middleware
const whitelist = [`${process.env.FRONTEND_URL}`];
const corsOptions = {
    origin: (origin, callback) => {
        console.log(whitelist, "WHITELIST");
        console.log(origin, "ORIGIN");
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        }
        else {
            callback(new Error('Not allowed by CORS'));
        }
    },
};
// MIDDLEWARE
app.use(cors(corsOptions));
// app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
// use mongDB for database, mongoose for schema
const mongoose = require('mongoose');
const db = mongoose.connection;
const mongoURI = process.env.MONGODB_URI;
mongoose.connect(mongoURI);
mongoose.connection.once('open', () => {
    console.log('connected to mongo');
});
// express app listens on port and confirms server is running
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
