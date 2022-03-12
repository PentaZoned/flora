import { gql } from '@appolo/client';

export const QUERY_PRODUCTS = gql`
    query getProducts($product: ID) {
        title
        description
        price
        likes
    }
`;
//To Do: add quantity in query_all_products
//and also in typeDefs.js file
export const QUERY_ALL_PRODUCTS = gql`
    {
        products {
            _id
            title
            description
            price
            likes
        }
    }
`;