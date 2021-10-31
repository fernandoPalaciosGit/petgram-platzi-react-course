import React, { StrictMode } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '@Components/design/GlobalStyles'
import { Logo } from '@Components/Logo'
import { ListOfCategories } from '@Components/ListOfCategories'
import { ListOfPhotoCards } from '@Components/ListOfPhotoCards'
import { brandLightTheme } from '@Components/design/theme'

export default function Application () {
  return (
    <StrictMode>
      <ThemeProvider theme={brandLightTheme}>
        <GlobalStyles />
        <Logo />
        <main className='main'>
          <ListOfCategories />
          <ListOfPhotoCards />
        </main>
      </ThemeProvider>
    </StrictMode>
  )
}
