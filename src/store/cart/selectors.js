import { createSelector } from 'reselect';

const stateCart = state => state.cart;

export const getCartData = createSelector(stateCart, state => state.data);
