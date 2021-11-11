import React from 'react'
import { MdHome, MdOutlineFavorite, MdPerson } from 'react-icons/md'
import { NavBarButtons, NavBarLink } from '@Components/NavBar/styles'

export const NavBar = () => {
  return (
    <NavBarButtons>
      <NavBarLink to='/'><MdHome size='32' /></NavBarLink>
      <NavBarLink to='/favourites'><MdOutlineFavorite size='32' /></NavBarLink>
      <NavBarLink to='/user'><MdPerson size='32' /></NavBarLink>
    </NavBarButtons>
  )
}
