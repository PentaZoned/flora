import { gql } from '@apollo/client';

export const QUERY_ALL_PRODUCTS = gql`
   {
        products {
            _id
            title
            description
            image
            price
            category {
                name
            }
            likes
        }
    }  
`;

export const QUERY_SINGLE_PRODUCT = gql`
    query getSingleProduct($_id: ID!) {
        product(_id: $_id) {
          _id
          title
          image
          price
          description
        }
    } 
`;

export const QUERY_USER = gql`
    query user($_id: ID!) {
        user(_id: $_id) {
            _id
            firstName
            lastName
            email
            cart {
                title
                description
                image
            }
        }
    }
`;