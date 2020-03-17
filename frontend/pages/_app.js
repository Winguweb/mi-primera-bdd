import withData from "../lib/apollo"
import defaultPage from "../hocs/defaultPage"
import App from "next/app"
import Head from "next/head"
import '../styles/index.css'

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    console.log(pageProps)
    return { pageProps }
  }

  render () {
    const { Component, pageProps, isAuthenticated, ctx } = this.props
    return (
      <>
        <Head>
          <title>Wingu | Mi primera base de datos</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link href="https://fonts.googleapis.com/css?family=Oswald|Raleway&display=swap" rel="stylesheet"  /> 
        </Head>
        <Component {...pageProps} />
      </>
    )
  }
}

export default withData(MyApp)