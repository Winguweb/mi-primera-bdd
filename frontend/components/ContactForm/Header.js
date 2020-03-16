import Link from 'next/link'

const Header = () => (
  <header className="w-full flex items-center justify-between">
    <h1 className="mr-4 inline-block font-semibold text-2xl ">
      <Link href="/contacts">
        <span className="cursor-pointer">Gestión de contactos</span>
      </Link>
      <span className="mx-2">/</span>
      <span className="border-b-4 border-yellow-wingu">Nuevo contacto</span>
    </h1>
    <div>
      <button className="button text-white bg-blue-wingu flex items-center justify-center w-full p-4 font-bold rounded">
        Guardar contacto
      </button>
    </div>
  </header>
)

export default Header