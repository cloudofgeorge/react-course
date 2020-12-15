import React from 'react';

class ErrorBoundaryView extends React.Component {
  state = {
    isError: false,
  };

  componentDidCatch(error, errorInfo) {
    const { onError } = this.props;
    this.setState({ isError: true });

    if (onError) {
      onError(error, errorInfo);
    }
  }

  render() {
    if (this.state.isError) {
      return <h1>Something went wrong</h1>;
    }
    return this.props.children;
  }
}

export const ErrorBoundary = ErrorBoundaryView;
