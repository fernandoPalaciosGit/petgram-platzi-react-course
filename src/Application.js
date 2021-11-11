import React from 'react'
import { ThemeProvider } from 'styled-components'
import { brandLightTheme } from '@Components/design/theme'
import { LocalStorageProvider } from '@Providers/LocalStorage'
import GraphQlProvider from '@Providers/GraphQlProvider'
import { Header } from '@Components/Header'
import { Body } from '@Components/Body'
import { UserLoggedProvider } from '@Providers/UserLoggedProvider'

export default function Application () {
  return (
    <UserLoggedProvider>
      <LocalStorageProvider>
        <GraphQlProvider>
          <ThemeProvider theme={brandLightTheme}>
            <Header/>
            <Body/>
          </ThemeProvider>
        </GraphQlProvider>
      </LocalStorageProvider>
    </UserLoggedProvider>
  )
}
