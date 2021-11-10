import React from 'react'
import { ThemeProvider } from 'styled-components'
import { ListOfCategories } from '@Components/ListOfCategories'
import { ListOfPhotoCards } from '@Components/ListOfPhotoCards'
import { brandLightTheme } from '@Components/design/theme'
import { LocalStorageProvider } from '@Providers/LocalStorage'
import GraphQlProvider from '@Providers/GraphQlProvider'
import { PetDetails } from '@Components/PetDetails'
import { Router } from '@reach/router'
import { Header } from '@Components/Header'

const Body = ({ categoryId }) => {
  return (
    <>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={categoryId} />
    </>
  )
}

export default function Application () {
  return (
    <ThemeProvider theme={brandLightTheme}>
      <LocalStorageProvider>
        <Header />
        <main className='main'>
          <GraphQlProvider>
            <Router>
              <PetDetails path='/pet-details/:id' />
              <Body path='/pet-category/:categoryId' />
              <Body
                path='/'
                categoryId={1}
              />
            </Router>
          </GraphQlProvider>
        </main>
      </LocalStorageProvider>
    </ThemeProvider>
  )
}
