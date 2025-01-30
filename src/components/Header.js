import React, { useState } from "react";
import { FaBasketShopping } from "react-icons/fa6";
import Order from "./Order";

const showOrders = (props) => {
  let count = 0;
  props.orders.forEach(elem => count += Number.parseFloat(elem.price))
  return (<div>
    {props.orders.map(elem => (
      <Order key={elem.id} item={elem} onDelete={props.onDelete}/>
    ))}
    <p className="count">Count: {new Intl.NumberFormat().format(count)}$</p>
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
