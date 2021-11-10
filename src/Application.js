import React, { Fragment } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '@Components/design/GlobalStyles'
import { Logo } from '@Components/Logo'
import { ListOfCategories } from '@Components/ListOfCategories'
import { ListOfPhotoCards } from '@Components/ListOfPhotoCards'
import { brandLightTheme } from '@Components/design/theme'
import { LocalStorageProvider } from '@Providers/LocalStorage'
import GraphQlProvider from '@Providers/GraphQlProvider'
import { useQueryParam } from '@Hooks/useQueryParam'
import { PhotoCardId } from '@Components/PhotoCard'

const Header = () => {
  return (
    <>
      <GlobalStyles />
      <Logo />
    </>
  )
}
const Body = () => {
  return (
    <>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={3} />
    </>
  )
}

export default function Application () {
  const { param } = useQueryParam('photo-card')

  return (
    <ThemeProvider theme={brandLightTheme}>
      <LocalStorageProvider>
        <Header />
        <main className='main'>
          <GraphQlProvider>
            {param && <PhotoCardId id={param} />}
            {!param && <Body />}
          </GraphQlProvider>
        </main>
      </LocalStorageProvider>
    </ThemeProvider>
  )
}
