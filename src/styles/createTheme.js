import createBreakpoints from './createBreakpoints'
import createTypography from './createTypography'
import createPalette from './createPalette'
import createSpacing from './createSpacing'

export default function createTheme(options = {}) {
  const {
    breakpoints: breakpointsInput = {},
    // mixins: mixinsInput = {},
    palette: paletteInput = {},
    spacing: spacingInput,
    typography: typographyInput = {},
    ...other
  } = options

  const breakpoints = createBreakpoints(breakpointsInput)
  const palette = createPalette(paletteInput)
  const spacing = createSpacing(spacingInput)

  const typography = createTypography(typographyInput)

  const theme = {
    breakpoints,
    direction: 'ltr',
    typography,
    palette,
    spacing,
    ...other,
  }

  return theme
}
