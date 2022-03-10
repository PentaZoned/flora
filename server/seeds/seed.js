const connection = require('../config/connection');
const { User, Product, Category } = require('../models');
const { users, products, categories } = require('./data');

connection.once('open', async () => {
    console.log('connected');

    await User.deleteMany({});
    await Product.deleteMany({});
    await Category.deleteMany({});

    await User.collection.insertMany(users);
    await Product.collection.insertMany(products);
    await Category.collection.insertMany(categories);

    console.table(users);
    console.table(products);
    console.table(categories);
    console.info('Seeding complete!');
    process.exit(0);
});