import React, { useContext, Suspense, lazy } from 'react'
import { Router } from '@reach/router'
import { WrapperBody } from '@Components/Body/styles'
import { UserLoggedContext } from '@Providers/UserLoggedProvider'
import { LoadingPage } from '@Components/LoadingPage'

const FavouritesPage = lazy(() => import('@Pages/FavouritesPage'))
const LoginPage = lazy(() => import('@Pages/LoginPage'))
const UserPage = lazy(() => import('@Pages/UserPage'))
const PetDetailsPage = lazy(() => import('@Pages/PetDetailsPage'))
const PetCategoryPage = lazy(() => import('@Pages/PetCategoryPage'))
const HomePage = lazy(() => import('@Pages/HomePage'))
const RegisterPage = lazy(() => import('@Pages/RegisterPage'))

const PublicRoutes = () => {
  return (
    <Router>
      <HomePage path='/' />
      <RegisterPage path='/register' />
      <LoginPage path='/login' />
    </Router>
  )
}

const ProtectedRoutes = () => {
  return (
    <Router>
      <PetCategoryPage path='/pet-category/:categoryId' />
      <PetDetailsPage path='/pet-details/:petId' />
      <FavouritesPage path='/favourites' />
      <UserPage path='/user' />
    </Router>
  )
}

const LoginRoutes = () => {
  return (
    <Router>
      <LoginPage path='/pet-category/:categoryId' />
      <LoginPage path='/pet-details/:petId' />
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
