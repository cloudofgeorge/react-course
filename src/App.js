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
    console.log({ id, name });
  };

  render() {
    const products = this.state.products;

    return (
      <div className="App">
        <header>
          <h1>{this.state.pageTitle}</h1>
        </header>
        <button onClick={this.changePageTitleHandler}>Change title</button>
        <Product
          name={products[0].name}
          count={products[0].count}
          addToCart={() =>
            this.addToCartHandler(products[0].id, products[0].name)
          }
        />
        <Product
          name={products[1].name}
          count={products[1].count}
          addToCart={() =>
            this.addToCartHandler(products[1].id, products[1].name)
          }
        />
      </div>
    );
  }
}

export default App;
