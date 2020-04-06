import { useState } from 'react'

const Searchbar = ({ handleSearch }) => {
  const [search, setSearch] = useState('')

  return (
    <div className="w-2/5">
      <div className="relative mr-6 my-2">
        <input
          type="search"
          className="w-full bg-purple-white shadow rounded border-0 py-3 px-12"
          placeholder="Ingrese su búsqueda y presione 'Enter'"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {
            e.key === "Enter" && handleSearch(search)
          }} />
        <div className="absolute top-0 left-0 mt-4 ml-4 text-purple-lighter">
          <svg version="1.1" className="h-4 text-dark" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 52.966 52.966" style={{'enableBackground':'new 0 0 52.966 52.966'}} xmlSpace="preserve">
            <path d="M51.704,51.273L36.845,35.82c3.79-3.801,6.138-9.041,6.138-14.82c0-11.58-9.42-21-21-21s-21,9.42-21,21s9.42,21,21,21
              c5.083,0,9.748-1.817,13.384-4.832l14.895,15.491c0.196,0.205,0.458,0.307,0.721,0.307c0.25,0,0.499-0.093,0.693-0.279
              C52.074,52.304,52.086,51.671,51.704,51.273z M21.983,40c-10.477,0-19-8.523-19-19s8.523-19,19-19s19,8.523,19,19
              S32.459,40,21.983,40z"/>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Searchbar