const { Product } = require('../models');

module.exports = {
    // Get all products
    getProducts(req, res) {
        Product.find()
            .then(products => res.json(products))
            .catch(err => res.status(500).json(err));
    },

    // Get single product
    getSingleProduct(req, res) {
        Product.findOne({ _id: req.params.productId})
        .select('-__v')
        .then(product =>
            !product
            ? res.status(404).json({ message: 'No product with that ID'})
            : res.json(product))
            .catch(err => res.status(500).json(err));
    }
}


