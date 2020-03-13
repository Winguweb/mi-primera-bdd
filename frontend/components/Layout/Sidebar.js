import { useRouter } from "next/router";
import Link from 'next/link'


const Sidebar = () => {
  const router = useRouter()

  return (
    <aside className="fixed inset-y-0 left-0 p-2 w-64 mt-24">
      <div className="h-full w-full py-4 px-2 text-gray-900 bg-white rounded-lg text-left text-sm shadow-lg">
            <span className="px-1 py-1 rounded block mb-5 text-gray-500">
              <span>Inicio</span>
            </span>
            <Link href="/dashboard">
              <span className={`${router.pathname == "/dashboard" ? "font-bold text-green-wingu" : ""} cursor-pointer px-1 py-1 hover:bg-gray-200 hover:text-gray-700 rounded block mb-5`}>
                <span>• Indicadores</span>
              </span>
            </Link>
            <span className="px-1 py-1 rounded block mb-5 text-gray-500">
              <span>Gestión</span>
            </span>
            <Link href="/contacts">
            <span className={`${router.pathname == "/contacts" ? "font-bold text-green-wingu" : ""} cursor-pointer px-1 py-1 hover:bg-gray-200 hover:text-gray-700 rounded block mb-5`}>
                <span>• Contactos</span>
              </span>
            </Link>
            <Link href="/accounts">
            <span className={`${router.pathname == "/accounts" ? "font-bold text-green-wingu" : ""} cursor-pointer px-1 py-1 hover:bg-gray-200 hover:text-gray-700 rounded block mb-5`}>
                <span>• Cuentas</span>
              </span>
            </Link>
            <Link href="/opportunities">
            <span className={`${router.pathname == "/opportunities" ? "font-bold text-green-wingu" : ""} cursor-pointer px-1 py-1 hover:bg-gray-200 hover:text-gray-700 rounded block mb-5`}>
                <span>• Oportunidades</span>
              </span>
            </Link>
            <span className="px-1 py-1 rounded block mb-5 text-gray-500">
              <span>Configuración</span>
            </span>
            <Link href="/customize">
              <span className={`${router.pathname == "/customize" ? "font-bold text-green-wingu" : ""} cursor-pointer px-1 py-1 hover:bg-gray-200 hover:text-gray-700 rounded block mb-5`}>
                <span>• Campos customizables</span>
              </span>
            </Link>
          <div className="mt-48 text-center">
            <span>
              Hecho con 💚 por 
              <a href="https://winguweb.org" target="_blank" noopener noreferrer className="ml-1 text-blue-wingu cursor-pointer font-bold">Wingu</a>
            </span>
          </div>
      </div>
    </aside>
  )
}

export default Sidebar