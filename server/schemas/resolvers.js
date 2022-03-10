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
        }
    }
};

module.exports = resolvers;