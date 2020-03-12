const Header = ({ name }) => {
  return (
    <header className="flex items-center">
      <h2 className="mr-4 inline-block border-b-4 border-yellow-wingu font-semibold text-2xl ">
        ¡Hola, { name }!
      </h2>
      <span className="text-4xl">👋</span>
    </header>
  )
}

export default Header