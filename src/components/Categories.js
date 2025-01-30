import React, { Component } from "react";

export class Categories extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: [
        {
          key: "all",
          name: "All",
        },
        {
          key: "headphones",
          name: "HeadPhones",
        },
        {
          key: "shoes",
          name: "Shoes",
        },
        {
          key: "smartwatch",
          name: "Smartwatch",
        },
        {
          key: "backpack",
          name: "Backpack",
        },
      ],
    };
  }
  render() {
    return (
      <div className="categories">
        {this.state.categories.map((elem) => (
          <div
            key={elem.key}
            onClick={() => this.props.chooseCategorie(elem.key)}
          >
            {elem.name}
          </div>
        ))}
      </div>
    );
  }
}

export default Categories;
