const { Schema, model } = require('mongoose');

// Schema for User model
const userSchema = new Schema(
    {
        email: {
            type: String,
            unique: true,
            required: true,
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
        },
        password: {
            type: String,
            unique: true,

        },
        cart: [
            {
                type:  Schema.Types.ObjectId,
                ref: 'Product',
            }
        ]
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

userSchema
    .virtual('cartCount')
    .get(function() {
        return this.cart.length;
    });

const User  = model('User', userSchema);

module.exports = User;