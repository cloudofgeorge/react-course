import React from 'react';
import { Provider } from 'react-redux';
import { AppRouter } from './app-router';
import { ErrorBoundary } from './error-boundary';
import { configureStore } from './store/configure-store';

const store = configureStore();

export const App = () => (
  <ErrorBoundary>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </ErrorBoundary>
);
