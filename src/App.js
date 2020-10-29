import React from "react";
import styles from "./App.module.scss";
import Product from "./Product";
import Cart from "./Cart";
import ErrorBoundary from "./ErrorBoundary";

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

  removeFromCartHandler = (id) => {
    const filteredArray = this.state.cart.filter((item) => item.id !== id);
    this.setState({
      cart: filteredArray,
    });
  };

  render() {
    return (
      <ErrorBoundary>
        <div className={styles.app}>
          <header className={styles.header}>
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
                inCart={this.state.cart.find(
                  (cartItem) => cartItem.id === item.id
                )}
              />
            ))}
          </div>

          <Cart
            data={this.state.cart}
            removeFromCart={this.removeFromCartHandler}
          />
        </div>
      </ErrorBoundary>
    );
  }
}

export default App;
