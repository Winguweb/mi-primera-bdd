import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Main from './Main'

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <Main>
          { children }
        </Main>
      </div>
    </div>
  )
}

export default Layout

