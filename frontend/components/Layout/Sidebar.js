const Sidebar = () => {
  return (
    <div class="p-2 w-64 ">
      <div className="w-full py-4 px-2 text-gray-900 bg-white rounded-lg text-left font-medium shadow-lg">
        <span className="cursor-pointer px-2 py-1 hover:bg-gray-200 hover:text-gray-700 rounded block mb-5">
          <span className="mx-2">Indicadores</span>
        </span>
        <span className="cursor-pointer px-2 py-1 hover:bg-gray-200 hover:text-gray-700 rounded block mb-5">
          <span className="mx-2">Gestión de contactos</span>
        </span>
        <span className="cursor-pointer px-2 py-1 hover:bg-gray-200 hover:text-gray-700 rounded block mb-5">
          <span className="mx-2">Gestión de cuentas</span>
        </span>
        <span className="cursor-pointer px-2 py-1 hover:bg-gray-200 hover:text-gray-700 rounded block mb-5">
          <span className="mx-2">Gestión de oportunidades</span>
        </span>
        <span className="cursor-pointer px-2 py-1 hover:bg-gray-200 hover:text-gray-700 rounded block mb-5">
          <span className="mx-2">Configuración de campos</span>
        </span>
      </div>
    </div>
  )
}

export default Sidebar