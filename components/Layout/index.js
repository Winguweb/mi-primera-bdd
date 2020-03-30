import { Component }from 'react'
import Cookies from 'js-cookie'
import defaultPage from '../../hocs/defaultPage'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Main from './Main'


class Layout extends Component {
  constructor(props) {
    super(props)
  }

  static async getInitialProps({ req }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return { pageProps, isAuthenticated }
  }

  render() {
    const { isAuthenticated, loggedUser, children, showModal } = this.props
    console.log(showModal)
    return (
      <div>
      {
        showModal &&
        <div>
          Showmodal
        </div>
      }
      <Navbar isAuthenticated={isAuthenticated} loggedUser={loggedUser} />
      {  isAuthenticated 
        ? (<div className="flex">
            <Sidebar />
            <Main>
              { children }
            </Main>
          </div>)
        : <> 
          { children }
        </> }
      }
    </div>
    )
  }
}

export default defaultPage(Layout)

