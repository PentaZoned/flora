import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_PRODUCT } from '../../utils/queries';

const SingleItem = () => {

    const { id } = useParams();

    const { loading, data } = useQuery(QUERY_SINGLE_PRODUCT, {
        variables: { _id: id },
    });

    const product = data?.product || {};
    console.log(product);
    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <img src={`../${product.image}`} />
            <h2>
                {product.title}
            </h2>
            <h3>
                ${product.price}
            </h3>
            <p>
                {product.description}
            </p>

        </div>
    );
};

export default SingleItem;