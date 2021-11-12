import { fontFamily, fontSize } from './typography'
import { blue, green, neutral, red } from './colors'
import { spaces } from '@Components/design/spaces'

const globalStyles = {
  rootFontSize: fontSize.root,
  rootFontFamily: fontFamily.primary,
  rootMaxWidth: '500px',
  rootShadow: '0 0 10px rgba(0, 0, 0, 0.05)'
}

const body = {
  bodyPaddingX: spaces.xm
}

const navBar = {
  navBarPaddingX: spaces.m,
  navBarLinkSize: spaces.xl,
  navBarLinkColor: neutral['400'],
  navBarLinkColorActive: red['100'],
  navBarPointerSize: fontSize.cursor
}

const Buttons = {
  smallSIzeButton: fontSize.footer1,
  largeSIzeButton: fontSize.paragraph2,
  textColorButton: neutral['100'],
  disabledColorButton: neutral['400']
}

const form = {
  inputErrorValidate: red['20'],
  inputDisabled: neutral['300']
}

export const brandLightTheme = {
  ...globalStyles,
  rootColor: neutral['500'],
  rootBackgroundColor: neutral['200'],
  primaryColor: blue['100'],
  primaryHoverColor: blue['200'],
  secondaryColor: green['100'],
  secondaryHoverColor: green['200'],
  ...form,
  ...body,
  ...navBar,
  ...Buttons
}

export const brandDarkTheme = {
  ...globalStyles,
  rootColor: neutral['400'],
  rootBackgroundColor: neutral['300'],
  ...form,
  ...body,
  ...navBar,
  ...Buttons
}
