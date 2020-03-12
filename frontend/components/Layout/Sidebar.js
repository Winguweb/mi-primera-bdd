import { useRouter } from "next/router";
import Link from 'next/link'


const Sidebar = () => {
  const router = useRouter()

  return (
    <aside class="p-2 w-64 ">
      <div className="w-full py-4 px-2 text-gray-900 bg-white rounded-lg text-left text-sm shadow-lg">
            <span className="px-1 py-1 rounded block mb-5 text-blue-wingu">
              <span>Inicio</span>
            </span>
            <Link href="/dashboard">
              <span className={`${router.pathname == "/dashboard" ? "font-bold text-gray-700" : ""} cursor-pointer px-1 py-1 hover:bg-gray-200 hover:text-gray-700 rounded block mb-5`}>
                <span>Indicadores</span>
              </span>
            </Link>
            <span className="px-1 py-1 rounded block mb-5 text-blue-wingu">
              <span>Gestión</span>
            </span>
            <Link href="/contacts">
            <span className={`${router.pathname == "/contacts" ? "font-bold text-gray-700" : ""} cursor-pointer px-1 py-1 hover:bg-gray-200 hover:text-gray-700 rounded block mb-5`}>
                <span>Contactos</span>
              </span>
            </Link>
            <Link href="/accounts">
            <span className={`${router.pathname == "/accounts" ? "font-bold text-gray-700" : ""} cursor-pointer px-1 py-1 hover:bg-gray-200 hover:text-gray-700 rounded block mb-5`}>
                <span>Cuentas</span>
              </span>
            </Link>
            <Link href="/opportunities">
            <span className={`${router.pathname == "/opportunities" ? "font-bold text-gray-700" : ""} cursor-pointer px-1 py-1 hover:bg-gray-200 hover:text-gray-700 rounded block mb-5`}>
                <span>Oportunidades</span>
              </span>
            </Link>
            <span className="px-1 py-1 rounded block mb-5 text-blue-wingu">
              <span>Configuración</span>
            </span>
            <Link href="/customize">
            <span className={`${router.pathname == "/customize" ? "font-bold text-gray-700" : ""} cursor-pointer px-1 py-1 hover:bg-gray-200 hover:text-gray-700 rounded block mb-5`}>
                <span>Campos customizables</span>
              </span>
            </Link>
      </div>
    </aside>
  )
}

export default Sidebar