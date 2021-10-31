import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '@Components/design/GlobalStyles'
import { Logo } from '@Components/Logo'
import { ListOfCategories } from '@Components/ListOfCategories'
import { ListOfPhotoCards } from '@Components/ListOfPhotoCards'
import { brandLightTheme } from '@Components/design/theme'
import { LocalStorageProvider } from '@Providers/LocalStorage'

export default function Application () {
  return (
    <ThemeProvider theme={brandLightTheme}>
      <LocalStorageProvider>
        <GlobalStyles />
        <Logo />
        <main className='main'>
          <ListOfCategories />
          <ListOfPhotoCards />
        </main>
      </LocalStorageProvider>
    </ThemeProvider>
  )
}
