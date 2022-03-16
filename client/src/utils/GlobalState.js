import React, { createContext, useContext, useState } from 'react';

// Initialize new context for cart
const CartContext = createContext();

// Custom hook to provide immediate usage of cart context to other components
export const useCartContext = () => useContext(CartContext);

// Provider, responsible to creating and updating global state and persisting values to children
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {

        // Update state of cart by adding new item to array of existing items
        if (!cart[0]) {
            setCart([product]);
        } else {
        setCart([...cart, product]);
        };
    };

    const emptyCart = () => {
        setCart([]);
    }

    return (
        <CartContext.Provider
            value={{ cart, addToCart, emptyCart }}
        >
            {/* Give children of provider access to global state */}
            { children }
        </CartContext.Provider>
    );
};