import React from 'react';
import './product-card.css';
import { Link } from 'react-router-dom';

const ProductCard = ({ products }) => {
    return (
        <div className='d-flex justify-content-center custom-card-container'>
            {products.map((product) => (
                <Link 
                    to={`/products/${product._id}`}
                    key={product._id}
                >
                    <div className='mx-5 mb-5 custom-card' >
                        <div className='d-flex justify-content-center'>
                            <img src={product.image} alt='A picture of a boquet of flowers' className='product-image'/>
                        </div>
                        <div className='d-flex justify-content-center pt-4'>
                            <div className='flex-column'>
                                <h2 className='product-title'>{product.title}</h2>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <h5 className='product-price'>{product.price}</h5>
                                    <img className='rating' src='images/rating-test.png' alt='heart rating'></img>
                                </div>
                            </div>
                        </div> 
                    </div>
                </Link>
            ))}
        </div>
    )
};

export default ProductCard;