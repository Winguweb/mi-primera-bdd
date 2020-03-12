import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext'

const Header = () => {
  const { user } = useContext(UserContext)

  return (
    <header className="flex items-center">
      <h1 className="mr-4 inline-block border-b-4 border-yellow-wingu font-semibold text-2xl ">
        ¡Hola {user.username}!
      </h1>
      <span className="text-4xl">👋</span>
    </header>
  )
}

export default Header