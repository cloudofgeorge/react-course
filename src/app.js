import React from "react";
import { AppRouter } from "./app-router";
import { ErrorBoundary } from "./error-boundary";

export const App = () => (
  <ErrorBoundary>
    <AppRouter />
  </ErrorBoundary>
);
