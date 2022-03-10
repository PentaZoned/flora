const { AuthenticationError } = require('apollo-server-express');
const { ResetTvOutlined } = require('@mui/icons-material');
const { User, Product, Category, Order } = require('../models');
const { signToken } = require('../utils/auth');

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

    },
    Mutation: {
        addUser: async (_parent, { firstName, lastName, email, password }, context) => {
            const user = await User.create({ firstName, lastName, email, password });
            const token = signToken(user);

            return { token, user };
        },
        addOrder: async (_parent, { products }, context) => {

            if (context.user) {
                const order = await Order.create({ products });
                await User.findByIdAndUpdate(context.user._id, { $push: { orders: order } });
                return order;
            }

            throw new AuthenticationError('Not logged in');
        }
    }
};

module.exports = resolvers;