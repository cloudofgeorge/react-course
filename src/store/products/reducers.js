import { initialState } from "./state";
import { PRODUCTS_PENDING, PRODUCTS_FETCHED, PRODUCTS_ERROR } from "./types";

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCTS_PENDING:
      return { ...state, pending: true, fetched: false };

    case PRODUCTS_FETCHED: {
      return {
        ...state,
        pending: false,
        fetched: true,
        data: action.payload,
      };
    }

    case PRODUCTS_ERROR: {
      return { ...state, pending: false, error: action.payload };
    }

    default:
      return state;
  }
};
