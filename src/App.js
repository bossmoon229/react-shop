import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: "Wireless Headphones",
          img: "first.jpg",
          desc: "High-quality wireless headphones with noise cancellation.",
          categorie: "headphones",
          price: "99.99",
        },
        {
          id: 2,
          title: "Running Shoes",
          img: "second.jpg",
          desc: "Lightweight and comfortable running shoes for everyday use.",
          categorie: "shoes",
          price: "59.99",
        },
        {
          id: 3,
          title: "Smartwatch",
          img: "third.jpg",
          desc: "A stylish smartwatch with fitness tracking and notifications.",
          categorie: "smartwatch",
          price: "149.99",
        },
        {
          id: 4,
          title: "Backpack",
          img: "fourth.jpg",
          desc: "Spacious and durable backpack, perfect for travel or school.",
          categorie: "backpack",
          price: "39.99",
        },
      ],
      showFullItem: false,
      fullItem: {},
    };
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategorie = this.chooseCategorie.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }

  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategorie={this.chooseCategorie} />
        <Items
          onShowItem={this.onShowItem}
          items={this.state.currentItems}
          onAdd={this.addToOrder}
        />

        {this.state.showFullItem && (
          <ShowFullItem
            onAdd={this.addToOrder}
            item={this.state.fullItem}
            onShowItem={this.onShowItem}
          />
        )}
        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({ fullItem: item });
    this.setState({ showFullItem: !this.state.showFullItem });
  }

  chooseCategorie(categorie) {
    if (categorie === "all") {
      this.setState({ currentItems: this.state.items });
      return;
    }
    this.setState({
      currentItems: this.state.items.filter(
        (elem) => elem.categorie === categorie
      ),
    });
  }

  deleteOrder(id) {
    this.setState({
      orders: this.state.orders.filter((elem) => elem.id !== id),
    });
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach((elem) => {
      if (elem.id === item.id) isInArray = true;
    });
    if (!isInArray) this.setState({ orders: [...this.state.orders, item] });
  }
}

export default App;
