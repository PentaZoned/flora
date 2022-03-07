const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    createUser,
    addToCart
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser);

// /api/users/:userId/products/:productId
router.route('/:userId/products/:productId').put(addToCart);

module.exports = router;