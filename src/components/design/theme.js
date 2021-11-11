import { fontFamily, fontSize } from './typography'
import { neutral } from './colors'
import { spaces } from '@Components/design/spaces'

export const globalStyles = {
  rootFontSize: fontSize.root,
  rootFontFamily: fontFamily.primary,
  rootMaxWidth: '500px',
  rootShadow: '0 0 10px rgba(0, 0, 0, 0.05)'
}

export const body = {
  bodyPaddingX: spaces.xm
}

export const navBar = {
  navBarPaddingX: spaces.m
}

export const brandLightTheme = {
  ...globalStyles,
  rootColor: neutral['500'],
  rootBackgroundColor: neutral['200'],
  ...body,
  ...navBar
}

export const brandDarkTheme = {
  ...globalStyles,
  rootColor: neutral['400'],
  rootBackgroundColor: neutral['300'],
  ...body,
  ...navBar
}
