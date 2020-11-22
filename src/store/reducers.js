import { combineReducers } from "redux";
import { catalogReducer } from "./catalog";
import { cartReducer } from "./cart";

export const rootReducer = combineReducers({
  catalog: catalogReducer,
  cart: cartReducer,
});
