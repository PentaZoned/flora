import { Card } from '@mui/material';
import React from 'react';
import { useCartContext } from '../../utils/GlobalState';
import './cart-content.css';

const CartContent = ({ user }) => {

    const { cart, removeFromCart } = useCartContext();

    // Calculate checkout total
    let sum = 0;
    for (var i = 0; i < cart.length; i++) {
        sum += cart[i].price;
    }

    let item;
    if (cart.length === 1) {
        item = 'item'
    } else if (cart.length === 0 || cart.length > 1) {
        item = 'items'
    };

    console.log(sum);

    console.log('****************')
    console.log(cart);
    
    return (
        <div className='row'>
            <div className='col-12 col-lg-7'>
            {cart.map((product) => (
                <div>
                    <div className='d-flex cart-item'>
                        <div className='d-flex' key={product._id}>
                            <img className='prod-image' src={`../${product.image}`}/>
                        </div>
                        <div className='d-flex flex-column justify-content-between product-info my-3'>
                            <div className=''>
                                <h5 className='product-title-cart' key={product._id}>{product.title}</h5>
                                <p className='product-id'>ID: {product._id}</p>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <p className='product-price-cart'>${product.price}</p>
                                <button
                                    className='cart-btn'
                                    type='button'
                                    onClick={() => {
                                        removeFromCart(product._id)
                                    }}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                        <div className='d-flex flex-column my-3 message'>
                                <p>Message:</p>
                                <textarea className='message-box'>
                                </textarea>
                            
                        </div>
                    </div>
                    <hr></hr>
                </div>
                
            ))}
            </div>
            {cart.length ? (
            <div className='col-12 col-lg-5'>
                <div className='order-summary-container'>
                    <h3>Order Summary</h3>
                    <hr></hr>
                    {cart.map((item) => (
                    <div className='d-flex justify-content-between'>
                        <p>{item.title}</p>
                        <p>{item.price}</p>
                    </div>
                ))}
                </div>
            </div>
            ) : (
                <div></div>
            )
            }
            {/* <p>Your cart has {cart.length} {item}</p>
            <p>Your total is ${sum}</p> */}
            
        </div>
    )
};

export default CartContent;
