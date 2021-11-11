import React from 'react'
import { MdHome, MdOutlineFavorite, MdPerson } from 'react-icons/md'
import { NavBarButtons, NavBarLink } from '@Components/NavBar/styles'
import { useTheme } from 'styled-components'

export const NavBar = () => {
  const { navBarLinkSize } = useTheme()

  return (
    <NavBarButtons>
      <NavBarLink to='/'><MdHome size={navBarLinkSize} /></NavBarLink>
      <NavBarLink to='/favourites'><MdOutlineFavorite size={navBarLinkSize} /></NavBarLink>
      <NavBarLink to='/user'><MdPerson size={navBarLinkSize} /></NavBarLink>
    </NavBarButtons>
  )
}
