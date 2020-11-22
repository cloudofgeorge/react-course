import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "./types";

export const addCartItemAction = (data) => ({
  type: CART_ADD_ITEM,
  payload: data,
});

export const removeCartItemAction = (data) => ({
  type: CART_REMOVE_ITEM,
  payload: data,
});
