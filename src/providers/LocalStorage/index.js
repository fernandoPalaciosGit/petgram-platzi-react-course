import React, { createContext, useEffect } from 'react'
import IsEmpty from 'lodash/isEmpty'
import Get from 'lodash/get'
import Set from 'lodash/set'

const ROOT_STORAGE = 'platzi-petgram'
const MAP_COMPONENTS = {
  ListOfPhotoCards: {}
}

const getRootStorage = () => JSON.parse(localStorage.getItem(ROOT_STORAGE))

const getStorage = (key = '', value) => {
  const storage = getRootStorage()
  return Get(storage, key, value)
}

const setStorage = (key = '', value) => {
  const storage = getRootStorage()
  Set(storage, key, value)
  localStorage.setItem(ROOT_STORAGE, JSON.stringify(storage))
}

const hasUpdateNewStorage = () => {
  const storage = getRootStorage()
  return IsEmpty(storage) || Object.keys(storage).length !== Object.keys(MAP_COMPONENTS).length
}

const initStorage = () => {
  if (hasUpdateNewStorage()) {
    const storage = getRootStorage()
    localStorage.setItem(ROOT_STORAGE, JSON.stringify({ ...storage, ...MAP_COMPONENTS }))
  }
}

/** getStorage(key), key must match MAP_COMPONENTS path: 'ListOfPhotoCards.123' */
export const LocalStorageContext = createContext({})
export const LocalStorageProvider = ({ children }) => {
  const storage = { getStorage, setStorage }

  useEffect(initStorage, [])

  return (
    <LocalStorageContext.Provider value={storage}>
      {children}
    </LocalStorageContext.Provider>
  )
}
