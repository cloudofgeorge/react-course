import { CATALOG_FETCH_REQUEST, CATALOG_FETCH_SUCCESS, CATALOG_FETCH_ERROR } from './types';
import { api } from '../../api';
import { PRODUCTS_LIMIT } from '../../constants';

const getCatalogSuccessAction = data => ({
  type: CATALOG_FETCH_SUCCESS,
  payload: data,
});

const getCatalogErrorAction = error => ({
  type: CATALOG_FETCH_ERROR,
  payload: error,
});

export const getCatalogAction = categoryName => dispatch => {
  dispatch({
    type: CATALOG_FETCH_REQUEST,
  });

  const url = categoryName ? `products/category/${categoryName}` : 'products';

  api
    .get(url, {
      limit: PRODUCTS_LIMIT,
    })
    .then(response => {
      dispatch(getCatalogSuccessAction(response));
    })
    .catch(err => {
      dispatch(getCatalogErrorAction(err.message));
    });
};
