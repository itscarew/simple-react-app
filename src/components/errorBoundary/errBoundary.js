import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(err, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <h1 className=" special text-center text-3xl ">
          Ooops...things aren't moving nice !!
        </h1>
      );
    } else return this.props.children;
  }
}

export default ErrorBoundary;
