import { Component } from "react"
import dynamic from "next/dynamic"
import Router from "next/router";
import PropTypes from "prop-types"

import defaultPage from "./defaultPage"

const LoginPage = dynamic(() => import("../pages/login"))

const securePageHoc = Page =>
  class SecurePage extends Component {
    static propTypes = {
      isAuthenticated: PropTypes.bool.isRequired
    }

    static getInitialProps(ctx) {
      return Page.getInitialProps && Page.getInitialProps(ctx)
    }

    componentDidMount() {
      if (!this.props.isAuthenticated) {
        Router.replace('/login')
      }
    }

    render() {
      const { isAuthenticated } = this.props
      return isAuthenticated 
      ? <Page {...this.props} />
      : <LoginPage />
    }
  }

export default Page => defaultPage(securePageHoc(Page))