import React, { useState } from "react";
import { FaBasketShopping } from "react-icons/fa6";

export default function Header() {
  let [cartOpen, setCartOpen] = useState(false);

  return (
    <header>
      <div>
        <span className="logo">House Staff</span>
        <ul className="nav">
          <li>About us</li>
          <li>Contacts</li>
          <li>Profile</li>
        </ul>
        <FaBasketShopping
          onClick={() => setCartOpen((cartOpen = !cartOpen))}
          className={`shop-cart-btn ${cartOpen && 'active'}`}
        />

        {cartOpen && (
          <div className="shop-cart"> 

          </div>
        )}
      </div>
      <div className="presentation"></div>
    </header>
  );
}
