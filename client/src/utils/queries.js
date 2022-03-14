import { gql } from '@apollo/client';

export const QUERY_ALL_PRODUCTS = gql`
   {
        products {
            _id
            title
            description
            price
            category {
                name
            }
            likes
        }
    }
`