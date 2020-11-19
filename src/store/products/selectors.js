import { createSelector } from "reselect";

export const stateProducts = (state) => state.products;

export const productsPending = createSelector(
  stateProducts,
  (state) => state.pending
);

export const productsFetched = createSelector(
  stateProducts,
  (state) => state.fetched
);

export const productsData = createSelector(
  stateProducts,
  (state) => state.data
);
