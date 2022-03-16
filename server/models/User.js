const { Schema, model } = require('mongoose');
const Product = require('./Product');
const bcrypt = require('bcrypt');

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
            required: true,
            minlength: 5
        },
        orders: [
            {
                type:  Schema.Types.ObjectId,
                ref: 'Order',
            }
        ],
        cart: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Product',
            }
        ],
        // cart: [Product.schema],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

userSchema.pre('save', async function(next) {
    if(this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
})

userSchema.methods.isCorrectPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};

userSchema
    .virtual('orderCount')
    .get(function() {
        return this.orders.length;
    });

const User  = model('User', userSchema);

module.exports = User;