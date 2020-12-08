import React, { useState, useEffect, useMemo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Layout } from "../components/common/layout";
import { ProductsList, ProductsFilters } from "../components/products";
import { getCatalogAction } from "../store/catalog";
import {
  getCatalogIsFetching,
  getCatalogData,
  getCatalogError,
} from "../store/catalog";
import {
  addCartItemAction,
  getCartData,
  removeCartItemAction,
} from "../store/cart";
import { TestContext } from "../context";

const createData = (value) => {
  let i = 0;
  while (i < 100000) i++;
  console.log(value, i);
  return value * 2;
};

export const CatalogPage = () => {
  const [categories, setCategories] = useState([
    "men clothing",
    "electronics",
    "jewelery",
    "women clothing",
  ]);

  const [filter, setFilter] = useState("all");

  const dispatch = useDispatch();

  const catalogData = useSelector(getCatalogData);
  const catalogIsFetching = useSelector(getCatalogIsFetching);
  const catalogError = useSelector(getCatalogError);
  const cartData = useSelector(getCartData);

  const getCatalog = useCallback(
    (categoryName) => dispatch(getCatalogAction(categoryName)),
    [dispatch]
  );

  const addCartItem = useCallback(
    (product) => dispatch(addCartItemAction(product)),
    [dispatch]
  );

  const removeCartItem = useCallback(
    (id) => dispatch(removeCartItemAction(id)),
    [dispatch]
  );

  useEffect(() => {
    getCatalog();
  }, [getCatalog]);

  useEffect(() => {
    console.log(filter);
  }, [filter]);

  const data = useMemo(() => createData(5), []);

  const getProducts = (categoryName) => {
    getCatalog(categoryName);
  };

  const changeFilter = (event) => {
    const value = event.target.value;

    setFilter(value);

    getProducts(value !== "all" ? value : null);
  };

  return (
    <TestContext.Provider value={1}>
      <Layout
        title="Products page"
        aside={
          <ProductsFilters
            title="Types"
            data={categories}
            filter={filter}
            onChange={changeFilter}
          />
        }
      >
        <div>useMemo example: {data}</div>
        {catalogIsFetching && "loading"}
        {!catalogIsFetching && !catalogError && (
          <ProductsList
            products={catalogData}
            addCartItem={addCartItem}
            removeCartItem={removeCartItem}
            cart={cartData}
          />
        )}
      </Layout>
    </TestContext.Provider>
  );
};
