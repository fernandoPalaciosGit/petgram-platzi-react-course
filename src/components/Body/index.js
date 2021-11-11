import React, { useContext } from 'react'
import { HomePage } from '@Pages/HomePage'
import { PetDetailsPage } from '@Pages/PetDetailsPage'
import { Router } from '@reach/router'
import { WrapperBody } from '@Components/Body/styles'
import { FavouritesPage } from '@Pages/FavouritesPage'
import { UserPage } from '@Pages/UserPage'
import { LoginPage } from '@Pages/LoginPage'
import { UserLoggedContext } from '@Providers/UserLoggedProvider'

const PublicRoutes = () => {
  return (
    <Router>
      <HomePage path='/' />
      <HomePage path='/pet-category/:categoryId' />
      <PetDetailsPage path='/pet-details/:petId' />
    </Router>
  )
}

const ProtectedRoutes = () => {
  return (
    <Router>
      <FavouritesPage path='/favourites' />
      <UserPage path='/user' />
    </Router>
  )
}

const LoginRoutes = () => {
  return (
    <Router>
      <LoginPage path='/favourites' />
      <LoginPage path='/user' />
    </Router>
  )
}

export const Body = () => {
  const {isLogged} = useContext(UserLoggedContext)

  return (
    <WrapperBody>
      <PublicRoutes />
      {isLogged ? <ProtectedRoutes /> : <LoginRoutes />}
    </WrapperBody>
  )
}
