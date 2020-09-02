import { createTheme as createRestyleTheme, useTheme as useRestyleTheme } from '@shopify/restyle'
import createBreakpoints from './createBreakpoints'
import createTypography from './createTypography'
import createPalette from './createPalette'

export default function createTheme(options = {}) {
  const {
    breakpoints: breakpointsInput = {},
    mixins: mixinsInput = {},
    palette: paletteInput = {},
    spacing: spacingInput,
    typography: typographyInput = {},
    ...other
  } = options

  const breakpoints = createBreakpoints(breakpointsInput)
  const palette = createPalette(paletteInput)

  const typography = createTypography(typographyInput)

  const theme = createRestyleTheme({
    breakpoints,
    direction: 'ltr',
    typography,
    palette,
    ...other,
  })

  return theme
}

export const useTheme = () => useRestyleTheme()
