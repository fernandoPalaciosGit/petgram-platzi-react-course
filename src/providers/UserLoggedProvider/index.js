import React, { createContext, useState } from 'react'
import { isEmpty } from 'lodash'

export const UserLoggedContext = createContext({})

const USER_LOGIN_TOKEN = 'login-platzi-gram'

const hasTokenInBrowserSession = () => {
  return !isEmpty(window.sessionStorage.getItem(USER_LOGIN_TOKEN))
}

const setTokenSession = (token) => {
  if (!isEmpty(token)) window.sessionStorage.setItem(USER_LOGIN_TOKEN, token)
}

export const UserLoggedProvider = ({ children }) => {
  const [isLogged, setLogging] = useState(hasTokenInBrowserSession)
  const activateUser = (token) => {
    setTokenSession(token)
    setLogging(hasTokenInBrowserSession)
  }

  return (
    <UserLoggedContext.Provider value={{ isLogged, activateUser }}>
      {children}
    </UserLoggedContext.Provider>
  )
}
