import React from "react";
import { Layout } from "../components/common/layout";
import { PRODUCTS_LIMIT } from "../constants";
import { ProductsList, ProductsFilters } from "../components/products";
import { CartContext } from "../context";
import { api } from "../api";

class CatalogPageView extends React.Component {
  state = {
    categories: [],
    products: {
      data: [],
      isFetching: false,
      error: null,
    },
    cart: [],
    filter: "all",
  };

  componentDidMount() {
    this.getProducts();
    this.getCategories();
  }

  getProducts = (categoryName) => {
    this.setState((prevState) => ({
      products: { ...prevState.products, isFetching: true },
    }));

    const url = categoryName ? `products/category/${categoryName}` : "products";

    api
      .get(url, {
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

  changeFilter = (event) => {
    const value = event.target.value;

    this.setState({ filter: value });

    this.getProducts(value !== "all" ? value : null);
  };

  getCategories = () => {
    this.setState({
      categories: ["men clothing", "electronics", "jewelery", "women clothing"],
    });
  };

  toggleCartHandler = (product) => {
    console.log(product);
    this.setState((prevState) => {
      if (this.state.cart.find(({ id }) => id === product.id)) {
        const filteredArray = this.state.cart.filter(
          ({ id }) => id !== product.id
        );
        return { cart: filteredArray };
      } else {
        return { cart: [...prevState.cart, product] };
      }
    });
  };

  render() {
    const { categories, products, cart, filter } = this.state;

    return (
      <CartContext.Provider
        value={{
          productsInCart: cart,
          removeFromCart: this.toggleCartHandler,
        }}
      >
        <Layout
          title="Products page"
          aside={
            <ProductsFilters
              title="Types"
              data={categories}
              filter={filter}
              onChange={this.changeFilter}
            />
          }
        >
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
    );
  }
}

export const CatalogPage = CatalogPageView;
