import React from "react";
import "./App.css";
import Product from "./Product";

class App extends React.Component {
  state = {
    pageTitle: "My App",
    products: [
      { id: 0, name: "Avocado", count: 10 },
      { id: 1, name: "Bread", count: 5 },
    ],
    cart: [],
  };

  changePageTitleHandler = () => {
    this.setState({ pageTitle: "Products list" });
  };

  addToCartHandler = (id, name) => {
    if (!this.state.cart.find((item) => item.id === id)) {
      this.setState((prevState) => ({
        cart: [...prevState.cart, { id, name }],
      }));
    }
  };

  render() {
    return (
      <div className="App">
        <header>
          <h1>{this.state.pageTitle}</h1>
        </header>
        <button onClick={this.changePageTitleHandler}>Change title</button>
        <div>
          {this.state.products.map((item) => (
            <Product
              key={item.id}
              name={item.name}
              count={item.count}
              addToCart={() => this.addToCartHandler(item.id, item.name)}
            />
          ))}
        </div>
        <div>
          <div>Cart:</div>
          {this.state.cart.map((item) => (
            <div key={item.id}>{item.name}</div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
