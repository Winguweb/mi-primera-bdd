import { Component }from 'react'
import Cookies from 'js-cookie'
import defaultPage from '../../hocs/defaultPage'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Main from './Main'
import Icon from '../../assets/wip.svg'
class Layout extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showModal: false,
      width: 0,
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
    this.updateWindowDimensions()
    window.addEventListener('resize', this.updateWindowDimensions)
  }

  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth})
  }

  

  render() {
    const { isAuthenticated, loggedUser, children } = this.props
    const { showModal, width } = this.state

    return (
      <div>
        {  isAuthenticated && <Navbar isAuthenticated={isAuthenticated} loggedUser={loggedUser} />}
        {  isAuthenticated 
          ? (<div className="flex">
              {width > 640 && (
                <>
                  <Sidebar loggedUser={loggedUser}/>
                  <Main showModal={showModal} dismissModal={this.dismissModal}>
                    { children }
                  </Main>
                </>
              )}
              {width <= 640 && (
                <div className="p-2 w-full mt-24  min-h-86vh flex items-center">
                  <div className="pt-12 px-6">
                    <div className="mb-6">
                      <p className="text-center font-bold text-2xl">Estamos trabajando para que puedas acceder desde tú celular, mientras tanto te invitamos a la versión web</p>  
                    </div>
                    <div className=" mt-12">
                      <Icon />
                    </div>
                  </div>
                </div>
              )}
            </div>)
          : <> 
            { children }
          </> }

      </div>
    )
  }
}

export default defaultPage(Layout)

