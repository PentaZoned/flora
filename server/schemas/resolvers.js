const { User, Product, Category, Order } = require('../models');

const resolvers = {
    Query: {
        users: async () => {
            return await User.find({});
        },
        products: async (_parent, { category, name }) => {
            const params = {};

            if (category) {
                params.category = category;
            }

            if (name) {
                params.name = {
                    $regex: name
                };
            }

            return await Product.find(params).populate('category');
        },
        categories: async () => {
            return await Category.find({});
        },
        orders: async () => {
            return await Order.find({}).populate('products');
        }

    }
};

module.exports = resolvers;