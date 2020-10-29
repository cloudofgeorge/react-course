import React from "react";
import styles from "./App.module.scss";
import Product from "./Product";
import Cart from "./Cart";
import ErrorBoundary from "./ErrorBoundary";
import withWindowSize from "./hoc/withWindowSize";

class App extends React.Component {
  state = {
    products: [
      { id: 0, name: "Avocado", count: 10 },
      { id: 1, name: "Bread", count: 5 },
    ],
    cart: [],
    inputData: "",
  };

  componentDidMount() {
    this.inputRef.focus();
  }

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

  handleChange = (event) => {
    this.setState({ inputData: event.target.value });
  };

  render() {
    const { isMobile } = this.props;
    return (
      <ErrorBoundary>
        <div className={styles.app}>
          {!isMobile && (
            <header className={styles.header}>
              <h1>Products list</h1>
            </header>
          )}
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

          <input
            type="text"
            value={this.state.inputData}
            onChange={this.handleChange}
            ref={(ref) => (this.inputRef = ref)}
          />
          {this.state.inputData}
        </div>
      </ErrorBoundary>
    );
  }
}

export default withWindowSize(App);
