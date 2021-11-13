import React, { createContext, useState } from 'react'
import { isEmpty } from 'lodash'

export const UserLoggedContext = createContext({})

const USER_LOGIN_TOKEN = 'login-platzi-gram'

export const getBearerAuthorization = () => {
  return hasTokenInBrowserSession() ? `Bearer ${getToken()}` : ''
}

export const getToken = () => {
  return window.sessionStorage.getItem(USER_LOGIN_TOKEN)
}

export const hasTokenInBrowserSession = () => {
  return !isEmpty(getToken())
}

const setTokenSession = (token) => {
  if (!isEmpty(token)) window.sessionStorage.setItem(USER_LOGIN_TOKEN, token)
}

export const removeTokenSession = () => {
  window.sessionStorage.removeItem(USER_LOGIN_TOKEN)
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
