const { Schema, model } = require('mongoose');
// const cartSchema = require('./Cart');


// Schema for User model
const userSchema = new Schema(
    {
        firstName: {
            type: String,
            required: true,
            trim: true,
        },
        lastName: {
            type: String,
            required: true,
            trim: true,
        },
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
        orders: [
            {
                type:  Schema.Types.ObjectId,
                ref: 'Order',
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
    .virtual('orderCount')
    .get(function() {
        return this.orders.length;
    });

const User  = model('User', userSchema);

module.exports = User;