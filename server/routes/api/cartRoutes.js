//cartRoutes
const router = require('express').Router();
const {
    getCart, 
    updateCart, 
    deleteCart, 
} = require('../../controllers/cartController');

// /api/cart 
router.route('/cart').get(getCart);

// /api/cart 
router.route('/cart').post(updateCart);

// /api/cart 
router.route('/cart').delete(deleteCart);
