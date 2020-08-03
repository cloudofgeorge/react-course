import React from "react";
import "./App.css";
import Product from "./Product";

class App extends React.Component {
  state = {
    pageTitle: "My App",
    products: [
      { name: "Avocado", count: 10 },
      { name: "Bread", count: 5 },
    ],
  };

  changePageTitleHandler = () => {
    this.setState({ pageTitle: "Products list" });
  };

  render() {
    const products = this.state.products;

    return (
      <div className="App">
        <header>
          <h1>{this.state.pageTitle}</h1>
        </header>
        <button onClick={this.changePageTitleHandler}>Change title</button>
        <Product name={products[0].name} count={products[0].count} />
        <Product name={products[1].name} count={products[1].count} />
      </div>
    );
  }
}

export default App;
