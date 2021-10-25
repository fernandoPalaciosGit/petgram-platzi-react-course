import React, { StrictMode } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './components/design/GlobalStyles'
import { brandLightTheme } from './components/design/theme'
import { ListOfCategories } from './components/listOfCategories/ListOfCategories'

export default function Application () {
  return (
    <StrictMode>
      <ThemeProvider theme={brandLightTheme}>
        <GlobalStyles />
        <main className="main">
          <ListOfCategories />
        </main>
      </ThemeProvider>
    </StrictMode>
  )
}
