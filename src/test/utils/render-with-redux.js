import React from 'react';
import { render } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from '../../store/reducers';

export const renderWithRedux = (ui, { store = createStore(rootReducer), ...renderOptions } = {}) =>
  render(ui, { wrapper: ({ children }) => <Provider store={store}>{children}</Provider>, ...renderOptions });
