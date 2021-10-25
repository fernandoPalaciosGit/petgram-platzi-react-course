import { fontFamily, fontSize } from './typography'
import { neutral } from './colors'

export const globalStyles = {
  rootFontSize: fontSize.root,
  rootFontFamily: fontFamily.primary
}

export const brandLightTheme = {
  ...globalStyles,
  rootColor: neutral['500']
}

export const brandDarkTheme = {
  ...globalStyles,
  rootColor: neutral['400']
}
