// Set up server variables/external modules
const express = require('express');
const app = express();
const methodOverride = require('method-override');
const cors = require('cors');

// Environment variables
require('dotenv').config()
const PORT = process.env.PORT

// Set up CORS middleware
const whitelist = [`${process.env.FRONTEND_URL}`, `http://www.familygains.com`, `https://www.familygains.com`, `www.familygains.com`, `familygains.com`, `https://family-gains.herokuapp.com`];
const corsOptions = {
	origin: (origin, callback) => {
		console.log(whitelist, "WHITELIST")
		console.log(origin, "ORIGIN")
		if (whitelist.indexOf(origin) !== -1 || !origin) {
			callback(null, true);
		} else {
			callback(new Error('Not allowed by CORS'));
		}
	}, credentials: true
};

app.use(cors(corsOptions));

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'))

// INTERNAL MODULES
const routes = require('./routes')

//ROUTES
// Sending the default route over to the controller
app.use('/products', routes.products)
// Can add additional controllers here

// Using mongDB for database, mongoose for schema
const mongoose = require('mongoose');
const db = mongoose.connection;
const mongoURI = process.env.MONGODB_URI
mongoose.connect(mongoURI);
mongoose.connection.once('open', () => {
   console.log('connected to mongo');
});

// Express app listens on port and confirms server is running
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});