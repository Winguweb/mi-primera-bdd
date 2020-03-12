import Router from 'next/router'
import Link from 'next/link'
import Logo from '../../assets/wingu-logo.svg'

const Navbar = () => {
  const handleLogout = () => {
    localStorage.removeItem('token')
    Router.push('/login')
  }

  return (
    <nav className="flex items-center justify-between flex-wrap bg-blue-wingu p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Link href="/dashboard">
            <Logo className="cursor-pointer mr-6" />
          </Link>
          <h1 className="font-title text-xl uppercase">Mi primera base de datos</h1>
          </div>
        <div className="flex flex-col items-end text-white">
          <span>Usuario: Techo</span>
          <button onClick={handleLogout}>
            <span>Cerrar sesión</span>
          </button>
        </div>
    </nav>
  )
}

export default Navbar