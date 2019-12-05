import React, { Component, ErrorInfo } from 'react';
import { Link, Redirect } from '@reach/router';

class ErrorBoundary extends Component {
  public state = { hasError: false, redirect: false };

  public static getDerivedStateFromError() {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, info: ErrorInfo) {
    // eslint-disable-next-line no-console
    console.error('Error Boundary caught error', error, info);
  }

  public componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => this.setState({ redirect: true }), 5000);
    }
  }
  public render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    if (this.state.hasError === true) {
      return (
        <h1>
          There was an Error with this listing <Link to="/">Click here</Link> to
          go back to the homepage or wait five seconds
        </h1>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
