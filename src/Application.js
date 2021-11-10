import React from 'react'
import { ThemeProvider } from 'styled-components'
import { brandLightTheme } from '@Components/design/theme'
import { LocalStorageProvider } from '@Providers/LocalStorage'
import GraphQlProvider from '@Providers/GraphQlProvider'
import { Header } from '@Components/Header'
import { Body } from '@Components/Body'

export default function Application () {
  return (
    <ThemeProvider theme={brandLightTheme}>
      <LocalStorageProvider>
        <GraphQlProvider>
          <Header />
          <Body />
        </GraphQlProvider>
      </LocalStorageProvider>
    </ThemeProvider>
  )
}
