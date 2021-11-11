import React, { useContext, Suspense, lazy } from 'react'
import { Router } from '@reach/router'
import { WrapperBody } from '@Components/Body/styles'
import { UserLoggedContext } from '@Providers/UserLoggedProvider'
import { LoadingPage } from '@Components/LoadingPage'

const FavouritesPage = lazy(() => import('@Pages/FavouritesPage'))
const LoginPage = lazy(() => import('@Pages/LoginPage'))
const UserPage = lazy(() => import('@Pages/UserPage'))
const PetDetailsPage = lazy(() => import('@Pages/PetDetailsPage'))
const HomePage = lazy(() => import('@Pages/HomePage'))

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
  const { isLogged } = useContext(UserLoggedContext)

  return (
    <WrapperBody>
      <Suspense fallback={<LoadingPage />}>
        <PublicRoutes />
        {isLogged ? <ProtectedRoutes /> : <LoginRoutes />}
      </Suspense>
    </WrapperBody>
  )
}
