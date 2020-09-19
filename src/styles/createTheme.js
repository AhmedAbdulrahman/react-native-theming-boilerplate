import createBreakpoints from './createBreakpoints'
import createTypography from './createTypography'
import createPalette from './createPalette'
import createSpacing from './createSpacing'
import createMixins from './createMixins'
import shadows from './shadows'
import extras from './extras'

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
  const spacing = createSpacing(spacingInput)
  const mixins = createMixins(spacing, mixinsInput)

  const typography = createTypography(typographyInput)

  const theme = {
    breakpoints,
    direction: 'ltr',
    typography,
    mixins,
    palette,
    spacing,
    shadows,
    extras,
    ...other,
  }

  return theme
}
