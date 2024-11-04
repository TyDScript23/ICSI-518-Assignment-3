// src/App.js

import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Wishlist from "./Components/Wishlist";
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
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/viewProduct/:id" element={<ViewProduct />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
