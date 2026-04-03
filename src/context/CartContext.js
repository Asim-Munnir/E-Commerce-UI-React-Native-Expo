import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        const existing = cartItems.find(item => item?._id === product?._id);

        if (existing) {
            // product already hai → quantity +1
            setCartItems(cartItems.map(item =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            ));
        } else {
            // product new → quantity 1 add kar
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
    };

    const removeFromCart = (productId) => {
        setCartItems(cartItems.filter(item => item._id !== productId));
    };

    return (
        <CartContext.Provider value={{ cartItems, setCartItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};