import React, { createContext, useState } from 'react'

export const UserLoggedContext = createContext({})

export const UserLoggedProvider = ({ children }) => {
  const [isLogged, setLogging] = useState(false)
  const activateUser = () => setLogging(true)

  return (
    <UserLoggedContext.Provider value={{ isLogged, activateUser }}>
      {children}
    </UserLoggedContext.Provider>
  )
}
