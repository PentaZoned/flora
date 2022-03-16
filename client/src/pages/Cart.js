import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';
import CartContent from '../components/CartContent/CartContent';

const Cart = () => {
    const { userId } = useParams();
    const { loading, data } = useQuery(QUERY_USER, {
        variables: { _id: userId },
    });
    const user = data?.user || [];
    console.log('----------------------------');
    console.log(user);

    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <div className='d-flex justify-content-center'>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <CartContent
            user={user}
            />
          )}
        </div>
    )
};

export default Cart;