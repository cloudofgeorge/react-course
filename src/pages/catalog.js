import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Layout } from '../components/common/layout';
import { ProductsList, ProductsFilters } from '../components/products';
import { getCatalogAction, getCatalogIsFetching, getCatalogData, getCatalogError } from '../store/catalog';

import { addCartItemAction, getCartData, removeCartItemAction } from '../store/cart';

export const CatalogPage = () => {
  const categories = ['men clothing', 'electronics', 'jewelery', 'women clothing'];

  const [filter, setFilter] = useState('all');

  const dispatch = useDispatch();

  const catalogData = useSelector(getCatalogData);
  const catalogIsFetching = useSelector(getCatalogIsFetching);
  const catalogError = useSelector(getCatalogError);
  const cartData = useSelector(getCartData);

  const getCatalog = useCallback(categoryName => dispatch(getCatalogAction(categoryName)), [dispatch]);

  const addCartItem = useCallback(product => dispatch(addCartItemAction(product)), [dispatch]);

  const removeCartItem = useCallback(id => dispatch(removeCartItemAction(id)), []);

  useEffect(() => {
    getCatalog();
  }, [getCatalog]);

  const changeFilter = event => {
    const { value } = event.target;

    setFilter(value);
    getCatalog(value !== 'all' ? value : null);
  };

  return (
    <Layout
      title="Products page"
      aside={<ProductsFilters title="Types" data={categories} filter={filter} onChange={changeFilter} />}>
      {catalogIsFetching && 'loading'}
      {!catalogIsFetching && !catalogError && (
        <ProductsList
          products={catalogData}
          addCartItem={addCartItem}
          removeCartItem={removeCartItem}
          cart={cartData}
        />
      )}
    </Layout>
  );
};
