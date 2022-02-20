import '../../styles/globals.css'
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import 'antd/dist/antd.css';

import React from 'react';
import App from 'next/app';
import Router from 'next/router';
import Layout from '../components/Layout';

export default class MyApp extends App {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
    };
  }

  componentDidMount() {

    this.setState({ loaded: true });
    Router.events.on('routeChangeStart', () =>
      this.setState({ loaded: false }),
    );
    Router.events.on('routeChangeComplete', () =>
      this.setState({ loaded: true }),
    );
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
          <Layout>
            <Component {...pageProps} /> 
          </Layout>    
      </>
    );
  }
}

