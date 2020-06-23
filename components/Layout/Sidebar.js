import { useRouter } from "next/router";
import Link from 'next/link'
import Header from '../Dashboard/Header'
import { unsetToken } from '../../lib/auth'
import Contact from './icons/Contact'
import Indicator from './icons/Indicator'
import Opportunity from './icons/Opportunity'
import Account from './icons/Account.svg'
import Custom from './icons/Custom.svg'

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
              <div className={`text-light-gray ${router.pathname == "/" ? "border-l-2 border-purple-wingu bg-purple-100 font-bold text-purple-wingu" : ""} cursor-pointer px-1 py-2 hover:bg-purple-100 hover:bg-opacity-25 hover:text-purple-wingu flex`}>
                <div><Indicator /></div>
                <div className="pl-2">Indicadores</div>
              </div>
            </Link>
            <Link href="/contacts">
              <div className={`text-light-gray ${router.pathname == "/contacts" ? "border-l-2 border-purple-wingu bg-purple-100 font-bold text-purple-wingu" : ""} cursor-pointer px-1 py-2 hover:bg-purple-100 hover:bg-opacity-25 hover:text-purple-wingu flex`}>
                <div><Contact /></div>
                <div className="pl-2">Contactos</div>
              </div>
            </Link>
            <Link href="/accounts">
              <div className={`text-light-gray ${router.pathname == "/accounts" ? "border-l-2 border-purple-wingu bg-purple-100 font-bold text-purple-wingu" : ""} cursor-pointer px-1 py-2 hover:bg-purple-100 hover:bg-opacity-25 hover:text-purple-wingu flex`}>
                <div><Account /></div>
                <div className="pl-2">Cuentas</div>
              </div>
            </Link>
            <Link href="/opportunities">
              <div className={`text-light-gray ${router.pathname == "/opportunities" ? "border-l-2 border-purple-wingu bg-purple-100 font-bold text-purple-wingu" : ""} cursor-pointer px-1 py-2 hover:bg-purple-100 hover:bg-opacity-25 hover:text-purple-wingu flex`}>
                <div><Opportunity /></div>
                <div className="pl-2">Oportunidades</div>
              </div>
            </Link>
            <Link href="/customize">
              <div className={`text-light-gray ${router.pathname == "/customize" ? "border-l-2 border-purple-wingu bg-purple-100 font-bold text-purple-wingu" : ""} cursor-pointer px-1 py-2 hover:bg-purple-100 hover:bg-opacity-25 hover:text-purple-wingu flex`}>
                <div><Custom /></div>
                <div className="pl-2">Campos Customizables</div>
              </div>
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