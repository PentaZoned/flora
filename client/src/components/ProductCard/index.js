import React from 'react';
import './product-card.css';

const ProductCard = ({ products }) => {
    return (
        <div className='d-flex justify-content-center custom-card-container'>
            {products.map((product) => (
                <div className='mx-5 mb-5 custom-card' key={product._id}>
                    <div className='d-flex justify-content-center'>
                        <img src={product.image} alt='A picture of a boquet of flowers' className='product-image'/>
                    </div>
                    <div className='d-flex justify-content-center pt-4'>
                        <div className='flex-column'>
                            <h2 className='product-title'>{product.title}</h2>
                            <h5 className='product-price'>{product.price}</h5>
                        </div>
                    </div>
                    
                </div>
            ))}
        </div>
    )
};

export default ProductCard;