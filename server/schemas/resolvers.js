const { AuthenticationError } = require('apollo-server-express');
const { async } = require('regenerator-runtime');
const { User, Product, Category, Order } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
            return await User.find({});
        },
        user: async(_parent, { _id }) => {
            return await User.findById(_id).populate('cart');
        },
        products: async () => {
            return await Product.find({}).populate('category');
        },
        product: async (_parent, { _id }) => {
            return await Product.findById(_id).populate('category');
        },
        categories: async () => {
            return await Category.find({});
        },
        orders: async () => {
            return await Order.find({}).populate('products');
        },

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
        },
        addToCart: async (_parent, { cart }, context) => {
            if (context.user) {
                const user = await User.findOneAndUpdate(
                    { _id: context.user._id},
                    { $push: { cart: cart},
                },
                {
                    new: true,
                    runValidators: true,
                }
                    );
                return user;
            }
        },
        login: async (_parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if(!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);

            return { token, user };
        }
    }
};

module.exports = resolvers;