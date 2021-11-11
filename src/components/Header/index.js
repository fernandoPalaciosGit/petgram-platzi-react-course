import React from 'react'
import { GlobalStyles } from '@Components/design/GlobalStyles'
import { Logo } from '@Components/Logo'
import { NavBar } from '@Components/NavBar'
import { WrapperHeader } from '@Components/Header/styles'

export const Header = () => {
  return (
    <WrapperHeader>
      <GlobalStyles />
      <Logo />
      <NavBar />
    </WrapperHeader>
  )
}
