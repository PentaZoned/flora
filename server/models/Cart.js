const { Schema, model } = require('mongoose');

// Schema for Cart
const cartSchema = new Schema(
    {
        userId: {
            type: Schema.Types.ObbjectId,
            ref: 'User'
        },
        products: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Product'
            }
        ],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);


const Cart = model('Cart', cartSchema);

module.exports = Cart;