import React from 'react'
import { GlobalStyles } from '@Components/design/GlobalStyles'
import { Logo } from '@Components/Logo'
import { NavBar } from '@Components/NavBar'

export const Header = () => {
  return (
    <>
      <GlobalStyles />
      <Logo />
      <NavBar />
    </>
  )
}
