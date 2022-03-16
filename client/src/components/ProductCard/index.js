import React from 'react';
import './product-card.css';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../utils/GlobalState';

import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Button from '@mui/material/Button';


const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
        color: '#ff6d75',
    },
    '& .MuiRating-iconHover': {
        color: '#ff3d47',
    },
});


const ProductCard = ({ products }) => {

    const { cart, addToCart } = useCartContext();

    return (
        <div className='d-flex justify-content-center custom-card-container'>
            {products.map((product) => (

                <div className='mx-5 mb-5 custom-card' >
                    <div className='d-flex justify-content-center'>
                        <Link
                            to={`/products/${product._id}`}
                            key={product._id}
                        >
                            <img src={product.image} alt='A picture of a boquet of flowers' className='product-image' />
                        </Link>
                    </div>
                    <div className='d-flex justify-content-center pt-4'>
                        <div className='flex-column'>
                            <Link
                                to={`/products/${product._id}`}
                                key={product._id}
                            >
                                <h2 className='product-title'>{product.title}</h2>
                            </Link>
                            <div className='d-flex justify-content-between align-items-center'>
                                <h5 className='product-price'>Price: ${product.price}</h5>
                                <Button variant="contained"
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
                                Add to cart
                                </Button>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                {/* <img className='rating' src='images/rating-test.png' alt='heart rating'></img> */}
                                <StyledRating
                                    name="customized-color"
                                    defaultValue={0}
                                    getLabelText={(value: number) => `${value} Heart${value !== 1 ? 's' : ''}`}
                                    precision={0.5}
                                    icon={<FavoriteIcon fontSize="inherit" />}
                                    emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                                />
                                <p className='product-likes'>{product.likes} likes</p>
                                
                            </div>
                        </div>
                    </div>
                </div>

            ))}
        </div>
    )
};

export default ProductCard;