import React from 'react';
import { fireEvent } from '@testing-library/react';
import { Cart } from '../cart';
import { renderWithRedux } from '../../../../../test/utils';
import { state } from './state';
import { getCartData } from '../../../../../store/cart';

jest.mock('../../../../../store/cart', () => ({
  getCartData: jest.fn(),
}));

beforeEach(() => {
  getCartData.mockClear();
});

describe('<Cart>', () => {
  it('should match snapshot', () => {
    getCartData.mockImplementation(() => state);

    const result = renderWithRedux(<Cart />);
    expect(result.container).toMatchSnapshot();
  });

  it('should open popup', () => {
    getCartData.mockImplementation(() => state);

    const result = renderWithRedux(<Cart />);

    fireEvent.click(result.getByTestId('cart-button'));

    expect(result.getByTestId('cart-window')).toBeDefined();
    expect(result.getAllByTestId('cart-item').length).toEqual(15);
  });
});
