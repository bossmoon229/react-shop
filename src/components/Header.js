import React, { useState } from "react";
import { FaBasketShopping } from "react-icons/fa6";
import Order from "./Order";

const showOrders = (props) => {
  return (<div>
    {props.orders.map(elem => (
      <Order key={elem.id} item={elem}/>
    ))}
  </div>)
}

const showNothing = () => {
  return(
    <div className="empty">
      <h2>No stuff</h2>
    </div>
  )
}

export default function Header(props) {
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
          className={`shop-cart-btn ${cartOpen && "active"}`}
        />

        {cartOpen && (
          <div className="shop-cart">
            {props.orders.length > 0 ? showOrders(props) : showNothing()}
          </div>
        )}
      </div>
      <div className="presentation"></div>
    </header>
  );
}
