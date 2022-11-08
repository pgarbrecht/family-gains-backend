// const express = require('express')
const db = require('../models')
// const router = express.Router()

const index = (req, res) => {
    db.Products.find(
        {}, (error, allProducts) => {
        if(error) return res.status(400).json({ error: error.message });
  
        return res.status(200).json({
            allProducts,
            requestedAt: new Date().toLocaleString()
        }); 
    })
}

module.exports = {
    index
    // create,
    // update,
    // destroy
}
