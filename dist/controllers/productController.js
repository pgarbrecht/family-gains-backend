const db = require('../models');
//This route returns list of all product objects
const index = (req, res) => {
    db.Products.find({}, (error, allProducts) => {
        if (error)
            return res.status(400).json({ error: error.message });
        return res.status(200).json({
            allProducts,
            requestedAt: new Date().toLocaleString()
        });
    });
};
//This route creates a new product in the database
const create = (req, res) => {
    //issue is not getting req.body yet
    // return res.send(req.body)
    db.Products.create(req.body, (error, createdProduct) => {
        if (error)
            return res.status(400).json({ error: error.message });
        return res.status(200).json(createdProduct);
    });
};
//This route updates a product in the database
const update = (req, res) => {
    db.Products.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, { new: true }, (err, updatedProduct) => {
        if (err)
            return res.status(400).json({ error: err.message });
        return res.status(200).json(updatedProduct);
    });
};
//This route deletes a product in the database
const destroy = (req, res) => {
    db.Products.findByIdAndDelete(req.params.id, (error, deletedProduct) => {
        if (!deletedProduct)
            return res.status(400).json({ error: "Product not found" });
        if (error)
            return res.status(400).json({ error: error.message });
        return res.status(200).json({
            message: `Product ${deletedProduct.name} deleted successfully`
        });
    });
};
module.exports = {
    index,
    create,
    update,
    destroy
};
