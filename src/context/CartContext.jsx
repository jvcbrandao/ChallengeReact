// src/context/CartContext.js
import { createContext, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (plant) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find(item => item.id === plant.id);
            if (existingItem) {
                return prevItems.map(item =>
                    item.id === plant.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prevItems, { ...plant, quantity: 1 }];
            }
        });
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart }}>
            {children}
        </CartContext.Provider>
    );
}
