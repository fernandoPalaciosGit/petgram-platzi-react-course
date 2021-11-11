import styled from 'styled-components'
import { Link } from '@reach/router'

export const NavBarButtons = styled.nav`
  position: fixed;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  bottom: 0;
  background: #fcfcfc;
  border-top: 1px solid #e0e0e0;
  box-sizing: border-box;
  width: 100%;
  left: 0;
  z-index: 100;
  padding: 0 10px;
`

export const NavBarLink = styled(Link)`
  color: #e91e63;
  height: 100%;
  padding: 10px;
  text-decoration: none;
`
