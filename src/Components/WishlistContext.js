import React, { createContext, useReducer } from 'react';

// Initial state for the wishlist
const initialState = [];

//Here wee will check the state and the action provided
const wishlistReducer = (state, action) => {
    switch (action.type) {
       // Add a product to the wishlist
        case 'ADD_TO_WISHLIST':
            // Check if the item is already in the wishlist
            if (state.find(item => item.id === action.payload.id)) {
                return state; // Item already in wishlist, no change
            }
            return [...state, action.payload];
        // Remove a product from the wishlist
        case 'REMOVE_FROM_WISHLIST':
            return state.filter(item => item.id !== action.payload);
           // Clear the wishlist
        case 'CLEAR_WISHLIST':
            return [];
        default:
            return state;
    }
};

// Create the WishlistContext
export const WishlistContext = createContext();

// WishlistProvider component to wrap around parts of the app that need access to the wishlist
export const WishlistProvider = ({ children }) => {
    const [wishlist, dispatch] = useReducer(wishlistReducer, initialState);

    // Functions to dispatch actions
    const addToWishlist = (item) => {
        dispatch({ type: 'ADD_TO_WISHLIST', payload: item });
    };

    const removeFromWishlist = (id) => {
        dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: id });
    };

    const clearWishlist = () => {
        dispatch({ type: 'CLEAR_WISHLIST' });
    };

    return (
        <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist, clearWishlist }}>
            {children}
        </WishlistContext.Provider>
    );
};