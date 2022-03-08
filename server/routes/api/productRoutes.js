const router = require('express').Router();
const {
    getProducts,
    getSingleProduct,
} = require('../../controllers/productController');

// /api/products
router.route('/').get(getProducts);

// /api/products/:productId
router.route('/:productId').get(getSingleProduct);

module.exports = router;