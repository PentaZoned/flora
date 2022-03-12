import { gql } from '@appolo/client';

export const QUERY_PRODUCTS = gql`
    query getProducts($product: ID) {
        title
        description
        price
        likes
    }
`;

//TO DO: Add quantity typeDefs.js file
export const QUERY_ALL_PRODUCTS = gql`
    {
        products {
            _id
            title
            description
            price
            likes
            quantity
        }
    }
`;

export const QUERY_CATEGORIES = gql`
    {
        categories{
            _id
            name
        }
    }
`;
//TO DO: Add quantity and image to typeDefs.js
export const QUERY_USER = gql`
    {
        user {
            firstName
            lastName
            orders {
                _id
                purchaseDate
                products {
                    _id
                    title
                    description
                    price
                    quantity
                    image
                }
            }
        }
    }
`;