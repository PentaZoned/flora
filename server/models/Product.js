const { Schema, model } = require('mongoose');

// Schema for Product model
const productSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        likes: {
            type: Number,
        },
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

productSchema
    .virtual('likesCount')
    .get(function() {
        return this.likes
    })

const Product = model('Product', productSchema);

module.exports = Product;