import React from 'react'
import { ThemeProvider } from 'styled-components'
import { brandLightTheme } from '@Components/design/theme'
import { LocalStorageProvider } from '@Providers/LocalStorage'
import GraphQlProvider from '@Providers/GraphQlProvider'
import { Router } from '@reach/router'
import { Header } from '@Components/Header'
import { HomePage } from '@Pages/HomePage'
import { PetDetailsPage } from '@Pages/PetDetailsPage'

export default function Application () {
  return (
    <ThemeProvider theme={brandLightTheme}>
      <LocalStorageProvider>
        <Header />
        <main className='main'>
          <GraphQlProvider>
            <Router>
              <HomePage path='/' />
              <HomePage path='/pet-category/:categoryId' />
              <PetDetailsPage path='/pet-details/:petId' />
            </Router>
          </GraphQlProvider>
        </main>
      </LocalStorageProvider>
    </ThemeProvider>
  )
}
