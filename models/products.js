// Using mongoose for the schema builder
const mongoose = require('mongoose');

// Setting up the schema
const productSchema = new mongoose.Schema({
    name: { type: String, required: true }, 
    description: { type: String, required: true }, 
    image: { type: String, required: true }, 
    price: { type: Number, required: true }, 
    inStock: { type: String, required: true, default: 'yes' } 
});

// Exporting the schema for use in the app
const Products = mongoose.model('Products', productSchema);

module.exports = Products;
