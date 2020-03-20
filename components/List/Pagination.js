const Pagination = () => {
  return (
    <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between">
      <span className="text-xs xs:text-sm text-gray-900">
        Mostrando <strong>1</strong> a <strong>4</strong> de <strong>50</strong> entradas
      </span>
      <div className="inline-flex mt-2 xs:mt-0">
        <button className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
          {'<<'}
        </button>
        <button className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">
          {'>>'}
        </button>
      </div>
    </div>
  )
}

export default Pagination