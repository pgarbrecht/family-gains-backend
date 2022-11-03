// const express = require('express')
const db = require('../models')
// const router = express.Router()

const index = (req, res) => {
    db.Products.find(
        {}, (err, allProducts) => {
            res.send('products index works')
    })
}

module.exports = {
    // home,
    index
    // create,
    // update,
    // destroy
}
