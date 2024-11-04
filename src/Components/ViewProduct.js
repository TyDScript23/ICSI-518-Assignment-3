import { useParams } from "react-router-dom";
import { CartContext } from "./CartContext";
import { useContext } from 'react';
import { useState, useEffect } from "react";
import { WishlistContext } from './WishlistContext';

const ViewProduct = () => {
  const { id } = useParams(); 
  const { addToCart } = useContext(CartContext);
  const { wishlist, addToWishlist } = useContext(WishlistContext);
  const [addedToCart, setAddedToCart] = useState(false); 
  const [addedToWishlist, setAddedToWishlist] = useState(false);
  const [productlist, setProductlist] = useState({ data: [] });
  const [product, setProduct] = useState(null); 

  useEffect(() => {
      const fetchProducts = async () => {
          const response = await fetch("http://localhost:5000/api/products"); 
          const data = await response.json();
          setProductlist(data); 

          const foundProduct = data.find((item) => item.id === parseInt(id));
          setProduct(foundProduct); 
      };
      fetchProducts();
  }, [id]); 

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 1000);
  }
  const handleAddToWishlist = (product)=>{
    addToWishlist(product);
    setAddedToWishlist(true);
    setTimeout(() => setAddedToWishlist(false), 1000);
  }

  if (!product) {
    return <p>Loading...</p>; 
  }

  return (
    <div className="vpcontainer">
      <div className="vpcard">
        <img src={product.Image}/>
        <div className="flex">
            <p>{product.Name}</p>
            <p>{product.Price}</p>
            <p>{product.Description}</p>
        </div>
        <div className="flexmar">
            <input className="wishlistButton" type="submit" value="Add to Wishlist"onClick={()=>(handleAddToWishlist(product))} />
            <input className="viewButton" type="submit" value="Add to Cart" onClick={()=>(handleAddToCart(product))}/>
            {addedToCart && <p style={{ color: 'green', marginLeft :"65px" }}>Product added to cart!</p>}
            {addedToWishlist && <p style={{ color: 'green', marginLeft :"65px" }}>Product added to Wishlist!</p>}
        </div>
      </div>
    </div>
  );
};

export default ViewProduct;
