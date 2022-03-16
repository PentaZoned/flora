const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    orders: [Order]
    cart: [Product]
}

type Product {
    _id: ID
    title: String
    description: String
    image: String
    price: Float
    category: Category
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

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    users: [User]
    user(_id: ID!): User
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    categories: [Category]
    orders: [Order]
}

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
    addToCart(cart: [ID]!): User
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateProduct(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;