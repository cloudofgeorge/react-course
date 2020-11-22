import { initialState } from "./state";
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "./types";

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CART_ADD_ITEM: {
      return { data: [...state.data, action.payload] };
    }

    case CART_REMOVE_ITEM: {
      return { data: state.data.filter(({ id }) => id !== action.payload.id) };
    }

    default:
      return state;
  }
};
