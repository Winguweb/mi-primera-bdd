import Link from 'next/link'
import Logo from '../../assets/wingu-logo.svg'

const Navbar = () => {
  return (
    <nav className="fixed w-full flex items-center justify-between flex-wrap bg-blue-wingu p-6 z-10">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link href="/dashboard">
          <Logo className="cursor-pointer mr-6" />
        </Link>
        <h1 className="font-title text-xl uppercase">Mi primera base de datos</h1>
      </div>
      <div className="flex flex-col items-end text-white">
        {/* <span>Organización: {user.username}</span>
        <button onClick={logout}>
          <span>Cerrar sesión</span>
        </button> */}
      </div>
    </nav>
  )
}

export default Navbar