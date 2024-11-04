// src/Components/Wishlist.js
import React, { useContext } from 'react';
import { CartContext } from './CartContext'; // Assuming CartContext is defined in CartContext.js

const Wishlist = () => {
    const { wishlistItems, addToCart } = useContext(CartContext); // Example context usage

    return (
        <div>
            <h2>Your Wishlist</h2>
            <ul>
                {wishlistItems.map(item => (
                    <li key={item.id}>
                        {item.name}
                        <button onClick={() => addToCart(item)}>Add to Cart</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Wishlist;
