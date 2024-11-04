import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from './CartContext';
import { WishlistContext } from './WishlistContext';
import { Link } from 'react-router-dom';

const Cart = () => {
    const [quantity, setQuantity] = new useState(0);
    const { cart, removeFromCart, updateQuantity,  clearCart } = useContext(CartContext);
    const { wishlist, addToWishlist, clearWishlist } = useContext(WishlistContext);
    console.log("Its from Cart: "+cart);
    const totalAmount = cart.reduce((total, item) => {
        // Took help of chatgpt to write code in the below line
        const price = parseFloat(item.Price.replace(/[$,]/g, '')); 
        return total + (price * item.quantity);
    }, 0);

    return (
        <div className="vpcartcontainer">
            {cart.length==0 ? (
                <p style={{margin:"50px 0px", display:"flex", justifyContent:"center"}}> No items in Cart</p>
            ):(
                <p></p>
            )}

            {cart.map((item) => (
                <div key={item.id} className="vpcartcard">
                    <img src={item.Image}/>
                    <div className="cartData">
                        <p>{item.Name}</p>
                        <p>{item.Price}</p>
                        <div>
                            <input type='submit' value="-" onClick={() => updateQuantity(item.id, -1)} />
                            <input type='dropdown' style={{width: "40px"}} value={item.quantity} disabled/>
                            <input type='submit' value="+"onClick={() => updateQuantity(item.id, +1)}  />
                        </div>
                    </div>
                    <div className="buttonsCart">
                        <input className="wishlistButton" type="submit" value="Remove" onClick={()=>(removeFromCart(item.id))}/>
                        <input className="viewButton" type="submit" value="Move to Wist" onClick={()=>{addToWishlist(item);removeFromCart(item.id)}}/>
                    </div>
                </div>
            ))}
            <div className="totalAmount" style={{ marginTop: "20px", textAlign: "right" }}>
                <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
            </div>
        </div>
        
    );
}

export default Cart;