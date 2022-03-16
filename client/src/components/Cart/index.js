import { useQuery } from '@apollo/client';
import { QUERY_ALL_PRODUCTS } from '../../utils/queries';
import React, { useEffect, useState } from 'react';

const CART_KEY = "cart";

const Cart = ((props) => { 
    const { data, loading, error } = useQuery(QUERY_ALL_PRODUCTS);
    const products = data?.products || [];
    const [currentContents, setCurrentContents] = useState([]);
    const [currentProducts, setCurrentProducts] = useState([]);

    useEffect(() => {
        setCurrentContents(props.contents);

        if (data) {
            let allProducts = data.products;
            let cartProducts = allProducts.filter((product) => props.contents.includes(product._id)) || [];    
            setCurrentProducts(cartProducts);
        } 
    }, [loading, JSON.stringify(currentContents)])

    function getUserOrder(productID, action){
        var url = '/api/cart'

        fetch(url, {
            method: 'GET',
            headers: {
                'content-Type': "application/json"
            },
            body: JSON.stringify({'productId': productId, 'action': action})
        })
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log('data:', data)
        })
    };

    function updateUserOrder(productID, action){
        var url = '/api/cart'

        fetch(url, {
            method: 'POST',
            headers: {
                'content-Type': "application/json"
            },
            body: JSON.stringify({'productId': productId, 'action': action})
        })
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log('data:', data)
        })
    }

    function deleteUserOrder(productID, action){
        var url = '/api/cart'

        fetch(url, {
            method: 'DELETE',
            headers: {
                'content-Type': "application/json"
            },
            body: JSON.stringify({'productId': productId, 'action': action})
        })
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log('data:', data)
        })
    };

    const removeFromCart = (event) => {
        const productId = event.target.getAttribute('data-product-id');
        const newContents = [...currentContents];
        newContents.splice(currentContents.indexOf(productId), 1);
        localStorage.setItem(CART_KEY, JSON.stringify(newContents));
        setCurrentContents(newContents);
        window.location.reload(false);
    }

    const renderProduct = (currentProduct) => {
        return (
            <div key={currentProduct._id}>
            <h2>{currentProduct.name}</h2>

            <p>{currentProduct.description}</p>
  
            <p>
              <strong>Price:</strong>${currentProduct.price}{' '}
              <button
                data-product-id={currentProduct._id} onClick={removeFromCart}
              >
                Remove from Cart
              </button>
            </p>
  
            <img
              src={`${currentProduct.image}`}
              alt={currentProduct.name}
            />
            </div>
        )
    }

    if (loading) return <div>loading</div>;
    if (!data) return <div>not found</div>;

    return(
        <>
        <div>Your shopping cart ({currentProducts.length} items)</div>
        {currentProducts && currentProducts.length ? (
            <div>
                {currentProducts.map(p => renderProduct(p))}
            </div>
        ) : (
            <div>
                Your shopping cart is empty.
            </div>
        )
        }
        </>
    )
});

export default Cart;
