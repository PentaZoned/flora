import React, {Profiler, useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import {useLazyQuery, useQuery} from '@apollo/client';

import Cart from 'client/src/components/pages/Cart.js';
import {useStoreContext} from 'client/src/GlobalState.js';
import {REMOVE_FROM_CART, UPDATE_CARD_QUANTITY, ADD_TO_CART, UPDATE_PRODUCTS,} from "client/src/utils/actions";
import {QUERY_PRODUCTS} from '../utils/queries';

function Detail(){
    const [state, dispatch] = useStoreContext();
    const {id} = useParams();
    const [currentProduct, setCurrentProduct] = useState({});
    const {loading, data} = useQuery(QUERY_PRODUCTS);
    const {products, cart} =state;
    
    useEffect(()=>{
        if(products.length){
            setCurrentProduct(products.find((product) => product._id ===id));
        }
        else if (data) {
            dispatch({
                type: UPDATE_PRODUCTS,
                products: data.products,
            });
        }
    })
    
    const addToCart = () => {
        const itemInCart = cart.find((cartItem) => cartItem._id === id);
        if (itemInCart){
            dispatch({
                type: UPDATE_CARD_QUANTITY,
                _id: id,
                purchaseQuantity: parseInt(itemInCart.purchaseQuantity) +1,
            })
        }else {
            dispatch({
                type: ADD_TO_CART,
                product: { ...currentProduct, purchaseQuantity: 1},
            });
        }
    };
    
    const removeFromCart =() => {
        dispatch({
            type: REMOVE_FROM_CART,
            _id: currentProduct._id,
        });
    }
    return (
        <>
        {currentProduct && cart ? (
            <main>
                <Link to="/"> Back to Product</Link>
                <div>
                    {products && products.map((product) => (
                        <div key={product._id}>
                            <div>
                                <img
                                    src={`${currentProduct.image}`}
                                    alt={currentProduct.title}
                                />
                            </div>
                            <div> {product.title}</div>
                            <div> {product.description}</div>
                            <div> {product.price}</div>  
                            <button
                                onClick={addToCart}>Add to Cart
                            </button>
                            <button
                                onClick ={removeFromCart}> Remove 
                            </button>
                        </div>
                    ))}
                </div>
            </main>
         ): null}
        </>
    )
}
export default Detail;