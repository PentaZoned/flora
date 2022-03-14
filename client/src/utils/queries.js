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
`