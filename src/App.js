// src/App.js

import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Wishlist from "./Components/WishList";
import ViewProduct from "./Components/ViewProduct";
import CartProvider from "./Components/CartContext";
import Cart from "./Components/Cart";

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/WishList" element={<Wishlist />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/ViewProduct/:id" element={<ViewProduct />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
