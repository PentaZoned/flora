import React from 'react';
import { useCartContext } from '../../utils/GlobalState';

const CartContent = ({ user }) => {

    const { cart } = useCartContext();

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
        <div>
            <p>Your cart has {cart.length} {item}</p>
            <p>Your total is ${sum}</p>
            <h1>Cart</h1>
            {cart.map((product) => (
                <div key={product._id}>
                    <img src={`../${product.image}`}/>
                    <p key={product._id}>{product.title}</p>
                </div>
            ))}
        </div>
    )
};

export default CartContent;
