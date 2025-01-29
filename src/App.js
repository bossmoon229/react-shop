import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],

      items: [
        {
          id: 1,
          title: "Wireless Headphones",
          img: "first.jpg",
          desc: "High-quality wireless headphones with noise cancellation.",
          category: "Electronics",
          price: "99.99",
        },
        {
          id: 2,
          title: "Running Shoes",
          img: "second.jpg",
          desc: "Lightweight and comfortable running shoes for everyday use.",
          category: "Footwear",
          price: "59.99",
        },
        {
          id: 3,
          title: "Smartwatch",
          img: "third.jpg",
          desc: "A stylish smartwatch with fitness tracking and notifications.",
          category: "Wearables",
          price: "149.99",
        },
        {
          id: 4,
          title: "Backpack",
          img: "fourth.jpg",
          desc: "Spacious and durable backpack, perfect for travel or school.",
          category: "Accessories",
          price: "39.99",
        },
      ],
    };
    this.addToOrder = this.addToOrder.bind(this);
  }

  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} />
        <Items items={this.state.items} onAdd={this.addToOrder} />
        <Footer />
      </div>
    );
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach((elem) => {
      if (elem.id === item.id) isInArray = true;

    });
    if(!isInArray)
    this.setState({ orders: [...this.state.orders, item] });
  }
}

export default App;
