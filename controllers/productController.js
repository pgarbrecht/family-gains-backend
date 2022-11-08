const db = require('../models')

//This route returns list of all product objects
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

// This route creates a new product in the database
const create = (req, res) => {
    //issue is not getting req.body yet
    // return res.send(req.body)
    db.Products.create(
        req.body, (error, createdProduct) => {
            if(error) return res.status(400).json({ error: error.message });
            return res.status(200).json(createdProduct)
        }
    )
}

module.exports = {
    index,
    create,
    // update,
    // destroy
}
