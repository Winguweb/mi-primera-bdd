import App from 'next/app'
import Head from 'next/head'
import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import withApolloClient from '../lib/with-apollo-client'
import UserContextProvider from '../context/UserContext'
import '../styles/index.css'

class MyApp extends App {
  render () {
    const { Component, pageProps, apolloClient } = this.props
    return (
      <ApolloProvider client={apolloClient}>
        <Head>
          <title>Wingu | Mi primera base de datos</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <UserContextProvider>
          <Component {...pageProps} />
        </UserContextProvider>
      </ApolloProvider>
    )
  }
}

export default withApolloClient(MyApp)