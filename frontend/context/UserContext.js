import React, { createContext, useState } from 'react'
import { useRouter } from 'next/router'

export const UserContext = createContext()

const UserContextProvider = (props) => {  
  const [ user, setUser ] = useState({})

  const storeUser = user => {      
    setUser({ 
      userName: user.userName
    })
  } 

  const logout = () => {
    setUser({})
  }

  return (
    <UserContext.Provider value={{ user,  storeUser, logout }}>
      {props.children}
    </UserContext.Provider>
  )}

export default UserContextProvider