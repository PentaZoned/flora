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

// export const QUERY_SINGLE_PRODUCT = gql`
//     {
//         query getSingleProduct($_id: ID!) {
//             product(_id: $_id) {
//               _id
//               title
//             }
//         } 
//     }
// `;