import React from 'react';

const CartContent = ({ user }) => {
    console.log('****************')
    console.log(user);
    return (
        <div>
            <h1>Cart</h1>
            {user.cart.map((product) => (
                <div>
                    <img src={`../${product.image}`}></img>
                    <p key={product._id}>{product.title}</p>
                </div>
            ))}
        </div>
    )
};

export default CartContent;
