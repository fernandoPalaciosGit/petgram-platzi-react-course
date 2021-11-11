import React from 'react'
import { HomePage } from '@Pages/HomePage'
import { PetDetailsPage } from '@Pages/PetDetailsPage'
import { Router } from '@reach/router'
import { WrapperBody } from '@Components/Body/styles'
import { useUserLogger } from '@Hooks/useUserLogger'
import { FavouritesPage } from '@Pages/FavouritesPage'
import { UserPage } from '@Pages/UserPage'
import { LoginPage } from '@Pages/LoginPage'

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
  const [isLogged] = useUserLogger()

  return (
    <WrapperBody>
      <PublicRoutes />
      {isLogged ? <ProtectedRoutes /> : <LoginRoutes />}
    </WrapperBody>
  )
}
