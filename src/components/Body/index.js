import React from 'react'
import { HomePage } from '@Pages/HomePage'
import { PetDetailsPage } from '@Pages/PetDetailsPage'
import { Router } from '@reach/router'
import { WrapperBody } from '@Components/Body/styles'

export const Body = () => {
  return (
    <WrapperBody>
      <Router>
        <HomePage path='/' />
        <HomePage path='/pet-category/:categoryId' />
        <PetDetailsPage path='/pet-details/:petId' />
      </Router>
    </WrapperBody>
  )
}
