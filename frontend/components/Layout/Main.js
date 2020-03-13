const Main = ({ children}) => {
  return (
    <div className="p-2 w-full mt-24 ml-64">
      <div className="w-full h-full py-4 px-2 text-gray-900 bg-white rounded-lg text-left font-medium shadow-lg">
        { children }
      </div>
    </div>
  )
}

export default Main