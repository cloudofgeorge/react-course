import React from "react";
import { ErrorBoundary } from "./error-boundary";
import { Layout } from "./components/common/layout";
import { PRODUCTS_LIMIT } from "./constants";
import { ProductsList } from "./components/products/products-list";
import { CartContext } from "./context";
import { api } from "./api";

class AppView extends React.Component {
  state = {
    products: {
      data: [],
      isFetching: false,
      error: null,
    },
    cart: [],
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = () => {
    this.setState((prevState) => ({
      products: { ...prevState.products, isFetching: true },
    }));

    api
      .get("products", {
        limit: PRODUCTS_LIMIT,
      })
      .then((result) => {
        this.setState((prevState) => ({
          products: {
            ...prevState.products,
            data: result,
            isFetching: false,
            error: null,
          },
        }));
      })
      .catch((error) => {
        this.setState({
          products: { data: [], isFetching: false, error },
        });
      });
  };

  toggleCartHandler = (id) => {
    this.setState((prevState) => {
      if (this.state.cart.find((item) => item === id)) {
        const filteredArray = this.state.cart.filter((item) => item !== id);
        return { cart: filteredArray };
      } else {
        return { cart: [...prevState.cart, id] };
      }
    });
  };

  render() {
    const { products, cart } = this.state;

    const productsInCart = products.data.filter(({ id }) => cart.includes(id));

    return (
      <ErrorBoundary>
        <CartContext.Provider
          value={{ productsInCart, removeFromCart: this.toggleCartHandler }}
        >
          <Layout>
            {products.isFetching && "loading"}
            {!products.isFetching && !products.error && (
              <ProductsList
                products={products.data}
                toggleCart={this.toggleCartHandler}
                cart={cart}
              />
            )}
          </Layout>
        </CartContext.Provider>
      </ErrorBoundary>
    );
  }
}

export const App = AppView;
