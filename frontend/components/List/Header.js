import Link from 'next/link'

const Header = ({ name, cta }) => (
  <header className="w-full flex items-center justify-between">
    <h1 className="mr-4 inline-block border-b-4 border-yellow-wingu font-semibold text-2xl ">
      {name}
    </h1>
    <div>
      <Link href={cta.link}>
        <a className="button text-white bg-blue-wingu flex items-center justify-center w-full p-4 font-bold rounded">
          {cta.title}
        </a>
      </Link>
    </div>
  </header>
)

export default Header