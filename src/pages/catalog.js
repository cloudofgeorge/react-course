import React from "react";
import { connect } from "react-redux";
import { Layout } from "../components/common/layout";
import { ProductsList, ProductsFilters } from "../components/products";
import {
  getCatalogData,
  getCatalogError,
  getCatalogIsFetching,
  getCatalogAction,
} from "../store/catalog";
import {
  addCartItemAction,
  getCartData,
  removeCartItemAction,
} from "../store/cart";

class CatalogPageView extends React.Component {
  state = {
    categories: [],
    filter: "all",
  };

  componentDidMount() {
    this.props.getCatalog();
    this.getCategories();
  }

  changeFilter = (event) => {
    const value = event.target.value;

    this.setState({ filter: value });

    this.props.getCatalog(value !== "all" ? value : null);
  };

  getCategories = () => {
    this.setState({
      categories: ["men clothing", "electronics", "jewelery", "women clothing"],
    });
  };

  render() {
    const { categories, filter } = this.state;
    const {
      catalogIsFetching,
      catalogData,
      catalogError,
      addCartItem,
      removeCartItem,
      cartData,
    } = this.props;

    return (
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
        {catalogIsFetching && "loading"}
        {!catalogIsFetching && !catalogError && (
          <ProductsList
            products={catalogData}
            addToCart={addCartItem}
            removeFromCart={removeCartItem}
            cart={cartData}
          />
        )}
      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  catalogIsFetching: getCatalogIsFetching(state),
  catalogData: getCatalogData(state),
  catalogError: getCatalogError(state),
  cartData: getCartData(state),
});

const mapDispatchToProps = (dispatch) => ({
  getCatalog: (catalogName) => dispatch(getCatalogAction(catalogName)),
  addCartItem: (product) => dispatch(addCartItemAction(product)),
  removeCartItem: (catalogName) => dispatch(removeCartItemAction(catalogName)),
});

export const CatalogPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(CatalogPageView);
