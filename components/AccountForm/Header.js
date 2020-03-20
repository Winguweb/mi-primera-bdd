import Link from 'next/link'

const Header = () => (
  <header className="w-full flex items-center justify-between">
    <h1 className="mr-4 inline-block font-semibold text-2xl ">
      <Link href="/accounts">
        <span className="cursor-pointer">Gestión de cuentas</span>
      </Link>
      <span className="mx-2">/</span>
      <span className="border-b-4 border-yellow-wingu">Nueva cuenta</span>
    </h1>
    <div>
      <button className="button text-white bg-blue-wingu flex items-center justify-center w-full p-4 font-bold rounded">
        Guardar cuenta
      </button>
    </div>
  </header>
)

export default Header