const Main = ({ children}) => {
  return (
    <div className="p-2 w-full mt-24 ml-64 min-h-86vh">
      <div className="w-full h-full py-4 px-2 text-gray-900 bg-white rounded-lg text-left font-medium shadow-lg min-h-full">
        { children }
      </div>
    </div>
  )
}

export default Main