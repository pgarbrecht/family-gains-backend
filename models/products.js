// use mongoose for our schema builder
const mongoose = require('mongoose');

// set up the schema
const productSchema = new mongoose.Schema({
    name: { type: String, required: true }, 
    description: { type: String, required: true }, 
    image: { type: String, required: true }, 
    price: { type: Number, required: true }, 
    inStock: { type: Boolean, required: true, default: true } 
});

// export our schema for use in the app
const Products = mongoose.model('Products', productSchema);
module.exports = Products;
