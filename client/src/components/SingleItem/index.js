import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { useMutation } from '@apollo/client';
import { QUERY_SINGLE_PRODUCT } from '../../utils/queries';
import AuthService from '../../utils/Auth';
import './single-item.css';
import { Link } from 'react-router-dom';

import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Button from '@mui/material/Button';
import Auth from '../../utils/Auth';
import { useCartContext } from '../../utils/GlobalState';

import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
        color: '#ff6d75',
    },
    '& .MuiRating-iconHover': {
        color: '#ff3d47',
    },
});


const userId = AuthService.getProfile().data._id;

console.log(`*******USER ID:${userId}***********`);

const SingleItem = () => {

    const { cart, addToCart, emptyCart } = useCartContext();
    console.log('*****THIS IS THE CART******')
    console.log(cart);

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
            <div>
                <Link className='link'
                to={'/'}>
                <p className='back'>{`< Products`}</p>
                </Link>
            </div>
            <div className='d-flex justify-content-center'>
                <div>
                    <img className='single-product' src={`../${product.image}`} />
                    <h2>
                        {product.title}
                    </h2>
                        <h3 className='product-price'>Price: ${product.price}</h3>
                        <button className='single-item-button'
                        type='button'
                        onClick={() => {
                            addToCart(
                                {
                                    _id: product._id,
                                    title: product.title,
                                    image: product.image,
                                    description: product.description,
                                    price: product.price,
                                })
                        }}
                        >
                        Add to Cart
                        </button>
                    <p>
                        {product.description}
                    </p>
                    <p>
                        <StyledRating
                            name="customized-color"
                            defaultValue={0}
                            getLabelText={(value: number) => `${value} Heart${value !== 1 ? 's' : ''}`}
                            precision={0.5}
                            icon={<FavoriteIcon fontSize="inherit" />}
                            emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                        />
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SingleItem;