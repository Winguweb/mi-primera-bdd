import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import LoginForm from '../components/LoginForm'

export default () => {
  const { loginUser } = useContext(UserContext)

  return (
    <div className="h-screen max-h-screen ">
      <div className="h-full w-full max-w-xs mx-auto flex items-center">
          <LoginForm submit={loginUser} />
      </div>
    </div>
  )
}