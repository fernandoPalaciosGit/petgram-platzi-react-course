import React, { createContext, useState } from 'react'
import IsEmpty from 'lodash/isEmpty'

export const UserLoggedContext = createContext({})

const USER_LOGIN_TOKEN = 'login-platzi-gram'

const getBearerAuthorization = () => {
  return hasTokenInBrowserSession() ? `Bearer ${getToken()}` : ''
}

const getToken = () => {
  return window.sessionStorage.getItem(USER_LOGIN_TOKEN)
}

const hasTokenInBrowserSession = () => {
  return !IsEmpty(getToken())
}

const setTokenSession = (token) => {
  if (!IsEmpty(token)) window.sessionStorage.setItem(USER_LOGIN_TOKEN, token)
}

const removeTokenSession = () => {
  window.sessionStorage.removeItem(USER_LOGIN_TOKEN)
}

export const UserLoggedProvider = ({ children }) => {
  const [isLogged, setLogging] = useState(hasTokenInBrowserSession)
  const activateUser = (token) => {
    setTokenSession(token)
    setLogging(hasTokenInBrowserSession)
  }
  const removeUser = () => {
    removeTokenSession()
    setLogging(hasTokenInBrowserSession)
  }

  return (
    <UserLoggedContext.Provider value={{ isLogged, activateUser, removeUser, getBearerAuthorization }}>
      {children}
    </UserLoggedContext.Provider>
  )
}
