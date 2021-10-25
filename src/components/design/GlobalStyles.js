import { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'

export const GlobalStyles = createGlobalStyle`
  ${normalize()}
  
  html {
    font-size: ${({ theme }) => theme.rootFontSize};
    box-sizing: border-box;
  }
  
  body {
      font-family: ${({ theme }) => theme.rootFontFamily};
      color: ${({ theme }) => theme.rootColor};
  }
  
  .main {
    margin: 20px auto;
    width: 90%;
  }
`
