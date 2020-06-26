import { useRouter } from "next/router";
import Link from 'next/link'
import Header from '../Dashboard/Header'
import { unsetToken } from '../../lib/auth'
import Contact from './icons/Contact'
import Indicator from './icons/Indicator'
import Opportunity from './icons/Opportunity'
import Account from './icons/Account'
import Custom from './icons/Custom'

const Sidebar = ({ loggedUser }) => {
  const router = useRouter()

  return (
    <aside className="fixed inset-y-0 left-0 p-2 w-64 mt-24">
      <div className="h-full w-full flex flex-col py-4 justify-between text-gray-900 bg-white rounded-lg text-left text-sm shadow-lg">
            <div className='flex flex-col'>
              <div className="px-5 py-3">
                <Header loggedUser={loggedUser} />
                <button className="flex items-center py-2" onClick={unsetToken}>
                  <span>Cerrar sesión</span>
                </button>
              </div>
              <Link href="/">
                <div className={`text-light-gray ${router.pathname == "/" ? "border-l-2 border-purple-wingu bg-purple-100 font-bold text-purple-wingu" : ""} cursor-pointer px-5 py-3 hover:bg-purple-100 hover:bg-opacity-25 hover:text-purple-wingu flex mb-2`}>
                  <div><Indicator active={router.pathname == "/"}/></div>
                  <div className={`pl-2 ${router.pathname == "/" ? "text-purple-wingu" : ""} select-none`}>Indicadores</div>
                </div>
              </Link>
              <Link href="/contacts">
                <div className={`text-light-gray ${router.pathname == "/contacts" ? "border-l-2 border-purple-wingu bg-purple-100 font-bold text-purple-wingu" : ""} cursor-pointer px-5 py-3 hover:bg-purple-100 hover:bg-opacity-25 hover:text-purple-wingu flex mb-2`}>
                  <div><Contact active={router.pathname == "/contacts"} /></div>
                  <div className={`pl-2 ${router.pathname == "/contacts" ? "text-purple-wingu" : ""} select-none`}>Contactos</div>
                </div>
              </Link>
              <Link href="/accounts">
                <div className={`text-light-gray ${router.pathname == "/accounts" ? "border-l-2 border-purple-wingu bg-purple-100 font-bold text-purple-wingu" : ""} cursor-pointer px-5 py-3 hover:bg-purple-100 hover:bg-opacity-25 hover:text-purple-wingu flex mb-2`}>
                  <div><Account active={router.pathname == "/accounts"}/></div>
                  <div className={`pl-2 ${router.pathname == "/accounts" ? "text-purple-wingu" : ""} select-none`}>Cuentas</div>
                </div>
              </Link>
              <Link href="/opportunities">
                <div className={`text-light-gray ${router.pathname == "/opportunities" ? "border-l-2 border-purple-wingu bg-purple-100 font-bold text-purple-wingu" : ""} cursor-pointer px-5 py-3 hover:bg-purple-100 hover:bg-opacity-25 hover:text-purple-wingu flex mb-2`}>
                  <div><Opportunity active={router.pathname == "/opportunities"}/></div>
                  <div className={`pl-2 ${router.pathname == "/opportunities" ? "text-purple-wingu" : ""} select-none`}>Oportunidades</div>
                </div>
              </Link>
              <Link href="/customize">
                <div className={`text-light-gray ${router.pathname == "/customize" ? "border-l-2 border-purple-wingu bg-purple-100 font-bold text-purple-wingu" : ""} cursor-pointer px-5 py-3 hover:bg-purple-100 hover:bg-opacity-25 hover:text-purple-wingu flex mb-2`}>
                  <div><Custom active={router.pathname == "/customize"}/></div>
                  <div className={`pl-2 ${router.pathname == "/customize" ? "text-purple-wingu" : ""} select-none`}>Campos Customizables</div>
                </div>
              </Link>
            </div>
            <div className="px-2">
              <span className>
                Hecho con 🧡 por 
                <a href="https://winguweb.org" target="_blank" rel="noopener noreferrer"className="ml-1 text-blue-wingu cursor-pointer font-bold text-purple-wingu">Wingu</a><br/>              
              </span>
              <span >
              ¿Te gustaría apoyar iniciativas como esta? Te invitamos a hacer una donación<a target='_blank' className='ml-1 text-blue-wingu cursor-pointer font-bold text-purple-wingu' href="https://donaronline.org/wingu-cultura-digital-impacto-social/apoyo-para-las-iniciativas-de-wingu">aquí</a>
              </span>
            </div>
      </div>
    </aside>
  )
}

export default Sidebar