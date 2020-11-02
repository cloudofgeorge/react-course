import React from "react";
import styles from "./App.module.scss";
import Product from "./Product";
import Cart from "./Cart";
import ErrorBoundary from "./ErrorBoundary";
import withWindowSize from "./hoc/withWindowSize";
import { Layout } from "./Layout";
import { ThemeContext, themes } from "./theme-context";

class App extends React.Component {
  state = {
    products: [
      { id: 0, name: "Avocado", count: 10 },
      { id: 1, name: "Bread", count: 5 },
    ],
    cart: [],
    inputData: "",
    theme: "light",
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

  changeThemeHandler = (event) => {
    this.setState({
      theme: event.target.value,
    });
  };

  render() {
    return (
      <ErrorBoundary>
        <ThemeContext.Provider value={this.state.theme}>
          <Layout>
            <div className={styles.app}>
              <div>
                <span>Theme: </span>
                <select onChange={this.changeThemeHandler}>
                  {Object.keys(themes).map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
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
          </Layout>
        </ThemeContext.Provider>
      </ErrorBoundary>
    );
  }
}

export default withWindowSize(App);
