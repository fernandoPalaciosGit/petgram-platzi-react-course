import { fontFamily, fontSize } from './typography'
import { neutral } from './colors'

export const globalStyles = {
  rootFontSize: fontSize.root,
  rootFontFamily: fontFamily.primary,
  rootMaxWidth: '500px',
  rootShadow: '0 0 10px rgba(0, 0, 0, 0.05)'
}

export const brandLightTheme = {
  ...globalStyles,
  rootColor: neutral['500'],
  rootBackgroundColor: neutral['200']
}

export const brandDarkTheme = {
  ...globalStyles,
  rootColor: neutral['400'],
  rootBackgroundColor: neutral['300']
}
