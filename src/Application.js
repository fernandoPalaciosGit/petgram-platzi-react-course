import React, { StrictMode } from 'react'
import { ListOfCategories } from './components'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './components/design/GlobalStyles'
import { brandLightTheme } from './components/design/theme'

export default function Application () {
  return (
    <StrictMode>
      <ThemeProvider theme={brandLightTheme}>
        <GlobalStyles />
        <ListOfCategories />
      </ThemeProvider>
    </StrictMode>
  )
}
