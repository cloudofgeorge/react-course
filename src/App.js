import React from "react";
import "./App.css";
import Product from "./Product";

class App extends React.Component {
  state = {
    products: [
      { name: "Avocado", count: 10 },
      { name: "Bread", count: 5 },
    ],
  };

  render() {
    const products = this.state.products;

    return (
      <div className="App">
        <header>
          <h1>Hello world</h1>
        </header>
        <Product name={products[0].name} count={products[0].count} />
        <Product name={products[1].name} count={products[1].count} />
      </div>
    );
  }
}

export default App;
