import React, { Component } from 'react';
import Link from '@reach/router';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // eslint-disable-next-line no-console
    console.error('Error Boundary caught error', error, info);
  }

  render() {
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
