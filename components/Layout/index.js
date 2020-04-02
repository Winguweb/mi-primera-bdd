import { Component }from 'react'
import Cookies from 'js-cookie'
import defaultPage from '../../hocs/defaultPage'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Main from './Main'

class Layout extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showModal: false
    }
  }

  static async getInitialProps({ req }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return { pageProps, isAuthenticated }
  }

  dismissModal = () => {
    Cookies.set("acceptedTerms", true)
    this.setState({ showModal: false })

  }

  componentDidMount() {
    if (Cookies.get("acceptedTerms") == "false") {
      this.setState({
        showModal: true
      })
    }
  }

  

  render() {
    const { isAuthenticated, loggedUser, children } = this.props
    const { showModal } = this.state

    return (
      <div>
        <Navbar isAuthenticated={isAuthenticated} loggedUser={loggedUser} />
        {  isAuthenticated 
          ? (<div className="flex">
              <Sidebar />
              <Main showModal={showModal} dismissModal={this.dismissModal}>
                { children }
              </Main>
            </div>)
          : <> 
            { children }
          </> }

      </div>
    )
  }
}

export default defaultPage(Layout)

