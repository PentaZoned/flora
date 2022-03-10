const { User } = require('../models');

module.exports = {
    // Get all users
    getUsers(req, res) {
        User.find()
        .then(users => res.json(users))
        .catch(err => res.status(500).json(err));
    },

    // Get single user
    getSingleUser(req, res) {
        User.findOne({_id: req.params.userId})
        .select('-__v')
        .then((user) =>
            !user
                ? res.status(404).json({ message: 'No user with that ID' })
                : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },

    // Create user
    createUser(req, res) {
        User.create(req.body)
            .then((user) => res.json(user))
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
    },

    // Update user
    updateUser(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user with that ID' })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },

    // Delete user
    deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.userId })
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user with that ID '})
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },

      // Add product to cart
      addToCart(req, res) {
        User.findOneAndUpdate(
            {_id: req.params.userId},
            { $addToSet: { cart: req.body } },
            { runValidators: true, new: true }
        )
        .then((user) => {
            if (!user) {
                res.status(404).json({ message: 'No user found with that ID' });
                return;
            }
            res.json(user);
        })
        .catch(err => res.json(err));
    },

    // addToCart(req, res) {
    //     User.findOne({ _id: req.params.userId })
    //     .select('-__v')
    //     .then((user) => {
    //         if (!user.cart.length) {
    //             Cart.create(req.body)
    //             .then((cart) => res.json(cart))
    //             .catch((err) => {
    //                 console.log(err);
    //                 res.status(500).json(err);
    //             });

    //             User.findOneAndUpdate(
    //                 { _id: req.params.userId },
    //                 { $addToSet: { cart: req.params.productId }},
    //                 { runValidators: true, new: true }
    //             )
    //             .then((user) => {
    //                 if (!user) {
    //                     res.status(404).json({ message: 'No user with that ID' });
    //                 }
    //             })
    //         }


    //     })
    // },

    removeFromCart(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $pull: { cart: { productId: req.body.productId }}},
            {runValidators: true, new: true }
        )
        .then((user) => {
            if (!user) {
                res.status(404).json({ message: 'No user with this ID' });
            }
            res.json({ message: 'Item removed from cart' });
        })
        .catch(err => res.status(500).json(err));
    }



};