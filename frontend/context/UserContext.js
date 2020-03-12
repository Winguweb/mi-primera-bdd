import React, { createContext, useState } from 'react'
import Router from 'next/router'
import { useMutation } from '@apollo/react-hooks'
import { useRouter } from 'next/router'
import { LOGIN_MUTATION } from '../graphql/user/mutation/login'


export const UserContext = createContext()

const UserContextProvider = (props) => {  
  const router = useRouter()

  const [ user, setUser ] = useState({})

  const [ login, { data }] = useMutation(LOGIN_MUTATION)

  const loginUser = async (user) => {
    const { email, password } = user

    const result = await login({
      variables: { email, password }
    })

    if (result) {
      const token = result.data.login.jwt
      const user = result.data.login.user

      localStorage.setItem('token', token)
      setUser(user)
      router.push('/dashboard')
    }
  } 

  const logout = () => {
    setUser({})
    localStorage.removeItem('token')
    Router.push('/login')
  }

  return (
    <UserContext.Provider value={{ user,  loginUser, logout }}>
      {props.children}
    </UserContext.Provider>
  )}

export default UserContextProvider