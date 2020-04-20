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
          <title>🚀 Wingudata</title>
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <link href='https://fonts.googleapis.com/css?family=Oswald|Raleway&display=swap' rel='stylesheet'  /> 
        </Head>
        <Component {...pageProps} />
      </Layout>
    )
  }
}

export default withData(MyApp)