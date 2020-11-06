import React from "react";
import { ErrorBoundary } from "./ErrorBoundary";
import { Layout } from "./components/common/layout";

class AppView extends React.Component {
  render() {
    return (
      <ErrorBoundary>
        <Layout>
          app content
        </Layout>
      </ErrorBoundary>
    );
  }
}

export const App = AppView;
