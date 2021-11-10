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

export default function Application () {
  const { param } = useQueryParam('photo-card')

  return (
    <ThemeProvider theme={brandLightTheme}>
      <LocalStorageProvider>
        <GlobalStyles />
        <Logo />
        <main className='main'>
          <GraphQlProvider>
            {param
              ? <PhotoCardId id={param} />
              : <>
                <ListOfCategories />
                <ListOfPhotoCards categoryId={3} />
              </>}
          </GraphQlProvider>
        </main>
      </LocalStorageProvider>
    </ThemeProvider>
  )
}
