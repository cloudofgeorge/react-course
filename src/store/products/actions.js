import { PRODUCTS_PENDING, PRODUCTS_FETCHED, PRODUCTS_ERROR } from "./types";

export const getCities = () => ({ type: PRODUCTS_PENDING });

export const getCitiesSuccess = (data) => ({
  type: PRODUCTS_FETCHED,
  payload: data,
});

export const getCitiesError = (message) => ({ type: PRODUCTS_ERROR, payload: message });
