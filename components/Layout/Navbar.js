import Link from 'next/link'
import Logo from '../../assets/wingudata-logo-white.svg'
import { Account } from '../Icons'

const Navbar = ({ isAuthenticated, loggedUser }) => {
  return (
    <nav className="fixed w-full flex items-center justify-between flex-wrap bg-purple p-6 z-10">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link href="/">
          <Logo className="cursor-pointer mr-4" />
        </Link>
      </div>
      { isAuthenticated &&
        <div className="flex flex-col items-start text-white">
          <div className="flex items-center mb-2">
            <span className="w-4 h-4 mr-2"><Account /></span>
            <span>{ loggedUser }</span>
          </div>
        </div>
      }
    </nav>
  )
}

export default Navbar