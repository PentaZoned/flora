const { Schema, model } = require('mongoose');
// const cartSchema = require('./Cart');
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
            unique: true,
            required: true
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

userSchema.pre('save', async function(next) {
    if(this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
})

userSchema
    .virtual('orderCount')
    .get(function() {
        return this.orders.length;
    });

const User  = model('User', userSchema);

module.exports = User;