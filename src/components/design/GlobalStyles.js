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
      background: ${({ theme }) => theme.rootBackgroundColor};
      height: 100vh;
      margin: 0 auto;
      max-width: ${({ theme }) => theme.rootMaxWidth};
      overscroll-behavior: none;
      width: 100%;
  }
  
  ul {
    list-style: none;
  }
  
  .main {
    box-shadow: ${({ theme }) => theme.rootShadow};
    padding-bottom: 10px;
    overflow-x: hidden;
    min-height: 100vh;
  }
`
