// set up server variables/external modules
const express = require('express');
const app = express();
const methodOverride = require('method-override');
const cors = require('cors');

// environment variables
require('dotenv').config()
const PORT = process.env.PORT

// if you uncomment this and comment out cors lines 24 + 26-28 then no longer undefined for hitting backend route
// https://stackoverflow.com/questions/61378602/cors-origin-undefined-with-simple-nodejs-server
app.use(function (req, res, next) {
	req.headers.origin = req.headers.origin || req.headers.host;
	next();
});

// Setup Cors middleware
const whitelist = [`${process.env.FRONTEND_URL}`, `https://family-gains.herokuapp.com`, `https://familygains.herokuapp.com`];
const corsOptions = {
	origin: (origin, callback) => {
		console.log(whitelist, "WHITELIST")
		console.log(origin, "ORIGIN")
		// ok if can't get if/else to work, since whitelist is set above
		// if (whitelist.indexOf(origin) !== -1 || !origin) {
			callback(null, true);
		// } else {
		// 	callback(new Error('Not allowed by CORS'));
		// }
	}, credentials: true
};

app.use(cors(corsOptions));

// import our model
const Products = require('./models/products.js')

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'))

// INTERNAL MODULES
// const productController = require('./controllers/productController.js')
// app.use('/store', productController)
const routes = require('./routes')

//ROUTES
// sending the default route over to the controller
app.use('/products', routes.products)
// can add additional controllers here

// use mongDB for database, mongoose for schema
const mongoose = require('mongoose');
const db = mongoose.connection;
const mongoURI = process.env.MONGODB_URI
mongoose.connect(mongoURI);
mongoose.connection.once('open', () => {
   console.log('connected to mongo');
});


// express app listens on port and confirms server is running
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});