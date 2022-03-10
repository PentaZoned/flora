const connection = require('../config/connection');
const { User, Product } = require('../models');
const products = require('./data');

connection.once('open', async () => {
    console.log('connected');

    await Product.deleteMany({});

    await Product.collection.insertMany(products);

    console.table(products);
    console.info('Seeding complete!');
    process.exit(0);
});