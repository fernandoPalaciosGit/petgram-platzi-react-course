import React, { useContext, Suspense, lazy } from 'react'
import { Redirect, Router } from '@reach/router'
import { WrapperBody } from '@Components/Body/styles'
import { UserLoggedContext } from '@Providers/UserLoggedProvider'
import { LoadingPage } from '@Components/LoadingPage'
import { NotFoundPage } from '@Pages/NotFoundPage'
import { HeaderTitle } from '@Components/HeaderTitle'

const FavouritesPage = lazy(() => import('@Pages/FavouritesPage'))
const LoginPage = lazy(() => import('@Pages/LoginPage'))
const UserPage = lazy(() => import('@Pages/UserPage'))
const PetDetailsPage = lazy(() => import('@Pages/PetDetailsPage'))
const PetCategoryPage = lazy(() => import('@Pages/PetCategoryPage'))
const HomePage = lazy(() => import('@Pages/HomePage'))
const RegisterPage = lazy(() => import('@Pages/RegisterPage'))

const ProtectedRoutes = () => {
  return (
    <Router>
      <NotFoundPage default />
      <HomePage path='/' />
      <PetCategoryPage path='/pet-category/:categoryId' />
      <PetDetailsPage path='/pet-details/:petId' />
      <FavouritesPage path='/favourites' />
      <UserPage path='/user' />
    </Router>
  )
}

const RedirectRoutesToLogin = () => {
  return (
    <Router>
      <NotFoundPage default />
      <HomePage path='/' />
      <LoginPage path='/login' />
      <RegisterPage path='/register' />
      <Redirect from='/pet-category/*' to='/login' noThrow />
      <Redirect from='/pet-details/*' to='/login' noThrow />
      <Redirect from='/favourites' to='/login' noThrow />
      <Redirect from='/user' to='/login' noThrow />
    </Router>
  )
}

export const Body = () => {
  const { isLogged } = useContext(UserLoggedContext)

  return (
    <WrapperBody>
      <Suspense fallback={<LoadingPage />}>
        <HeaderTitle title='Find animal species' />
        {!isLogged ? <RedirectRoutesToLogin /> : <ProtectedRoutes />}
      </Suspense>
    </WrapperBody>
  )
}
