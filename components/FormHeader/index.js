import Link from 'next/link'

const Header = ({ title, link, children }) => {
  return (
    <header className="w-full flex items-center justify-between">
      <h1 className="mr-4 inline-block font-semibold text-2xl ">
        <Link href={ link }>
          <span className="cursor-pointer">{ title }</span>
        </Link>
        <span className="mx-2">/</span>
        <span className="border-b-4 border-yellow-wingu">
          { children }
        </span>
      </h1>
    </header>
  )
}

export default Header