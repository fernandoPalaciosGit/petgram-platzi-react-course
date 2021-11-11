import styled from 'styled-components'
import { Link } from '@reach/router'
import { FadeIn } from '@Components/design/animations/FadeIn'

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
  height: 100%;
  padding: 10px;
  text-decoration: none;
  color: ${({ theme }) => theme.navBarLinkColor};
  
  &[aria-current] { // reach router implementation
    position: relative;
    color: ${({ theme }) => theme.navBarLinkColorActive};
    
    &::after {
      content: '.';
      position: absolute;
      bottom: -5px;
      font-size: ${({ theme }) => theme.navBarPointerSize};
      left: 50%;
      width: 0;
      transform: translateX(-5.5px);
      ${FadeIn({ time: '1.5s' })}
    }
  }
  
`
