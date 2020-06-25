import App from 'next/app'
import Head from 'next/head'
import { compose } from 'recompose'
import withData from '../lib/apollo'
import defaultPage from '../hocs/defaultPage'
import Layout from '../components/Layout'
import '../styles/index.css'


class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }


  render () {
    const { Component, pageProps, isAuthenticated, ctx } = this.props
    return (
      <Layout
        isAuthenticated={isAuthenticated} {...pageProps}>
        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
          <link rel="manifest" href="/site.webmanifest"/>
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
          <meta name="msapplication-TileColor" content="#da532c"/>
          <meta name="theme-color" content="#ffffff"/>
          <title>Wingudata</title>
        </Head>
        <Component {...pageProps} />
      </Layout>
    )
  }
}

export default withData(MyApp)