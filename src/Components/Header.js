import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <div className="header">
    <div className="logo">
      <h1 className="logoName">Lenskart</h1>
    </div>
    <div className="nav">
      <ul>
        <li>
          <Link to="/" className="navoption">Product List</Link>
        </li>
        <li>
          <Link to="/wishlist" className="navoption">Wishlist</Link>
        </li>
        <li>
          <Link to="/cart" className="navoption">Cart</Link>
        </li>
      </ul>
    </div>
  </div>
);

export default Header;
