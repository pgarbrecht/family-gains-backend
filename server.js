// set up server variables/external modules
const express = require('express');
const app = express();
const methodOverride = require('method-override');

// import our model
const Products = require('./models/products.js')

// INTERNAL MODULES
// const productController = require('./controllers/productController.js')
// app.use('/store', productController)
const routes = require('./routes')

//ROUTES
// sending the default route over to the controller
app.use('/products', routes.products)
// can add additional controllers here

// environment variables
require('dotenv').config()
const PORT = process.env.PORT

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'))

// use mongDB for database, mongoose for schema
const mongoose = require('mongoose');
const db = mongoose.connection;
const mongoURI = process.env.MONGODB_URI
mongoose.connect(mongoURI);
mongoose.connection.once('open', () => {
   console.log('connected to mongo');
});

//seed route
// app.get('/seed', async (req, res) => {
//     const newProducts = [
//         {name: "product 1 name",
//         description: "product 1 description",
//         image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png",
//         price: 12,
//         inStock: true
//         }, 
//         {name: "product 2 name",
//         description: "product 2 description",
//         image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png",
//         price: 8,
//         inStock: true
//         } 
//     ]
//     try {
//         const seedItems = await Products.create(newProducts)
//         res.send(seedItems)
//     }
//     catch (err) {
//         res.send(err.message)
//     }
//     })


// express app listens on port and confirms server is running
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});