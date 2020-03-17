import Link from 'next/link'
import { unsetToken } from "../../lib/auth"
import Logo from '../../assets/wingu-logo.svg'

const Navbar = ({ isAuthenticated, loggedUser }) => {
  return (
    <nav className="fixed w-full flex items-center justify-between flex-wrap bg-blue-wingu p-6 z-10">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link href="/">
          <Logo className="cursor-pointer mr-6" />
        </Link>
        <h1 className="font-title text-xl uppercase">Mi primera base de datos</h1>
      </div>
      { isAuthenticated &&
        <div className="flex flex-col items-end text-white">
          <span>Organización: { loggedUser }</span>
          <button onClick={unsetToken}>
            <span>Cerrar sesión</span>
          </button>
        </div>
      }
    </nav>
  )
}

export default Navbar