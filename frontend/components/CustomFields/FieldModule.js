const FieldModule = ({ name }) => {
  return (
    <div className="w-1/2 pr-4">
      <div>
        <span>{ name }</span>
      </div>
      <div className="bg-purple-white shadow rounded border-0 p-4 mt-4 min-h-1/4 flex flex-wrap justify-start">
        <button className="button text-white bg-blue-wingu flex items-center justify-center p-4 font-bold rounded mr-4">
          <span className="mr-4">Campo 1</span>
          <span>x</span>
        </button>
        <button className="button text-white bg-blue-wingu flex items-center justify-center p-4 font-bold rounded mr-4">
          <span className="mr-4">Campo 2</span>
          <span>x</span>
        </button>
        <button className="button text-white bg-blue-wingu flex items-center justify-center p-4 font-bold rounded mr-4">
          <span className="mr-4">Campo 3</span>
          <span>x</span>
        </button>
        <div>
          <div className="relative my-4">
            <input type="text" className="w-full bg-purple-white shadow rounded border-0 p-4" placeholder="Agregar nueva opción" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FieldModule