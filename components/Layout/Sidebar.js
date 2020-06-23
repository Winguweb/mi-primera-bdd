import { useRouter } from "next/router";
import Link from 'next/link'
import Header from '../Dashboard/Header'
import { unsetToken } from '../../lib/auth'


const Sidebar = ({ loggedUser }) => {
  const router = useRouter()

  return (
    <aside className="fixed inset-y-0 left-0 p-2 w-64 mt-24">
      <div className="h-full w-full flex flex-col py-4 px-4 text-gray-900 bg-white rounded-lg text-left text-sm shadow-lg">
            <div className="px-1 py-2">
              <Header loggedUser={loggedUser} />
              <button className="flex items-center" onClick={unsetToken}>
                <span>Cerrar sesión</span>
              </button>
            </div>
            <Link href="/">
              <span className={`text-light-gray ${router.pathname == "/" ? "bg-purple-100 font-bold text-purple-wingu" : ""} cursor-pointer px-1 py-2 hover:bg-purple-100 hover:bg-opacity-25 hover:text-purple-wingu block`}>
                <span>Indicadores</span>
              </span>
            </Link>
            <Link href="/contacts">
            <span className={`text-light-gray ${(router.pathname == "/contacts" || router.pathname == "/new-contact") ? "bg-purple-100 font-bold text-purple-wingu" : ""} cursor-pointer px-1 py-2 hover:bg-purple-100 hover:bg-opacity-25 hover:text-purple-wingu block`}>
                <span>Contactos</span>
              </span>
            </Link>
            <Link href="/accounts">
            <span className={`text-light-gray ${(router.pathname == "/accounts" || router.pathname == "/new-account")? "bg-purple-100 font-bold text-purple-wingu" : ""} cursor-pointer px-1 py-2 hover:bg-purple-100 hover:text-purple-wingu block`}>
                <span>Cuentas</span>
              </span>
            </Link>
            <Link href="/opportunities">
            <span className={`text-light-gray ${(router.pathname == "/opportunities" || router.pathname == "/new-opportunity") ? "bg-purple-100 font-bold text-purple-wingu" : ""} cursor-pointer px-1 py-2 hover:bg-purple-100 hover:text-purple-wingu block`}>
                <span>Oportunidades</span>
              </span>
            </Link>
            <Link href="/customize">
              <span className={`text-light-gray ${router.pathname == "/customize" ? "bg-purple-100 font-bold text-purple-wingu" : ""} cursor-pointer px-1 py-2 hover:bg-purple-100 hover:text-purple-wingu block`}>
                <span>Campos customizables</span>
              </span>
            </Link>
          <div className="mt-auto text-center">
            <span>
              Hecho con 💚 por 
              <a href="https://winguweb.org" target="_blank" rel="noopener noreferrer"className="ml-1 text-blue-wingu cursor-pointer font-bold text-purple-wingu">Wingu</a>
            </span>
          </div>
      </div>
    </aside>
  )
}

export default Sidebar