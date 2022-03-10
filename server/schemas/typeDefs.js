const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        firstName: String
        lastName: String
        email: String
        password: String
        orders: [Order]
    }

    type Product {
        _id: ID
        title: String
        description: String
        price: Float
        likes: Int
    }

    type Category {
        _id: ID
        name: String
    }

    type Order {
        _id: ID
        purchaseDate: String
        products: [Product]
    }

    type Query {
        users: [User]
        products: [Product]
        categories: [Category]
        orders: [Order]
    }
`;

module.exports = typeDefs;