const Main = ({ children}) => {
  return (
    <div className="p-2 w-full">
      <div className="w-full py-4 px-2 text-gray-900 bg-white rounded-lg text-left capitalize font-medium shadow-lg">
        { children }
      </div>
    </div>
  )
}

export default Main