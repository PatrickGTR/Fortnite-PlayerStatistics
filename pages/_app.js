import React from "react";
import App, { Container } from "next/app";
import Router from "next/router";
import Loader from "../components/Loader";

class MyApp extends App {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    this.setState({ isLoading: false });

    Router.onRouteChangeStart = () => this.setState({ isLoading: true });
    Router.onRouteChangeComplete = () => this.setState({ isLoading: false });
  }

  render() {
    const { Component, pageProps } = this.props;

    const { isLoading } = this.state;

    return (
      <Container>
        {isLoading && Loader()}
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default MyApp;
