import React from 'react'
import { HomePage } from '@Pages/HomePage'
import { PetDetailsPage } from '@Pages/PetDetailsPage'
import { Router } from '@reach/router'

export const Body = () => {
  return (
    <main className='main'>
      <Router>
        <HomePage path='/' />
        <HomePage path='/pet-category/:categoryId' />
        <PetDetailsPage path='/pet-details/:petId' />
      </Router>
    </main>
  )
}
