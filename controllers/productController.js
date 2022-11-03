const express = require('express');
const router = express.Router()
const Products = require('../models/products.js')
 
router.get('/', async (req, res) => {
    let products = await Products.find({});
    res.send('store working')
 });
 

module.exports = router