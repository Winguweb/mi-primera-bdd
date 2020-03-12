const Sidebar = () => {
  return (
    <aside class="p-2 w-64 ">
      <div className="w-full py-4 px-2 text-gray-900 bg-white rounded-lg text-left text-sm shadow-lg">
            <span className="px-1 py-1 rounded block mb-5 text-blue-wingu">
              <span>Inicio</span>
            </span>
            <span className="cursor-pointer px-1 py-1 hover:bg-gray-200 hover:text-gray-700 rounded block mb-5">
              <span>Indicadores</span>
            </span>
            <span className="px-1 py-1 rounded block mb-5 text-blue-wingu">
              <span>Gestión</span>
            </span>
            <span className="cursor-pointer px-1 py-1 hover:bg-gray-200 hover:text-gray-700 rounded block mb-5">
              <span>Contactos</span>
            </span>
            <span className="cursor-pointer px-1 py-1 hover:bg-gray-200 hover:text-gray-700 rounded block mb-5">
              <span>Cuentas</span>
            </span>

            <span className="cursor-pointer px-1 py-1 hover:bg-gray-200 hover:text-gray-700 rounded block mb-5">
              <span>Oportunidades</span>
            </span>
            <span className="px-1 py-1 rounded block mb-5 text-blue-wingu">
              <span>Configuración</span>
            </span>
            <span className="cursor-pointer px-1 py-1 hover:bg-gray-200 hover:text-gray-700 rounded block mb-5">
              <span>Campos customizables</span>
            </span>

      </div>
    </aside>
  )
}

export default Sidebar