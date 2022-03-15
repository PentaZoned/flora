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
        image: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        category: {
            type: Schema.Types.ObjectId,
            ref: 'Category',
            required: true,
        },
        quantity: {
            type: Number,
            min: 0,
            default: 0
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


const Product = model('Product', productSchema);

module.exports = Product;