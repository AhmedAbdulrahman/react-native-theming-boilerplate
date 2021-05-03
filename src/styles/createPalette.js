import merge from 'lodash/merge'
import { getContrastRatio } from 'utils'
import colors from './colors'

export const light = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: colors.common.black,
    // Secondary text.
    secondary: colors.common.black.fade(0.55),
    // Disabled text have even lower visual prominence.
    disabled: colors.common.black.fade(0.35),
    // Text hints.
    hint: colors.common.black.fade(0.65),
    // Text shadows, meant for headlines.
    shadow: `0 2px 100px ${colors.common.black.fade(0.6).hex()}`,
  },
  // The color used to divide different elements.
  divider: colors.common.black.fade(0.9),
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    default: colors.common.white,
    paper: colors.common.white,
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: colors.common.black,
    // The color of an hovered action.
    hover: colors.common.black.fade(0.96),
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: colors.common.black.fade(0.92),
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: colors.common.black.fade(0.74),
    // The background color of a disabled action.
    disabledBackground: colors.common.black.fade(0.88),
    disabledOpacity: 0.38,
    focus: colors.common.black.fade(0.88),
    focusOpacity: 0.12,
    activatedOpacity: 0.15,
  },
}

export const dark = {
  text: {
    primary: colors.common.white,
    secondary: colors.common.white.fade(0.35),
    disabled: colors.common.white.fade(0.65),
    hint: colors.common.white.fade(0.65),
    shadow: `0 2px 100px ${colors.common.white.fade(0.6).hex()}`,
  },
  divider: colors.common.white.fade(0.88),
  background: {
    default: colors.common.black,
    paper: colors.grey[700],
    linen: colors.grey[600],
  },
  action: {
    active: colors.common.white,
    hover: colors.common.white.fade(0.92),
    hoverOpacity: 0.08,
    selected: colors.common.white.fade(0.84),
    selectedOpacity: 0.16,
    disabled: colors.common.white.fade(0.7),
    disabledBackground: colors.common.white.fade(0.88),
    disabledOpacity: 0.38,
    focus: colors.common.white.fade(0.88),
    focusOpacity: 0.12,
    activatedOpacity: 0.15,
  },
}

const palette = {
  primary: {
    light: colors.pink[300],
    main: colors.pink[500],
    dark: colors.pink[700],
    background: colors.pink[50],
    contrastText: colors.pink[500],
  },
  secondary: {
    light: colors.blue[300],
    main: colors.blue[500],
    dark: colors.blue[700],
    background: colors.blue[50],
    contrastText: colors.common.black,
  },
  error: {
    light: colors.red[300],
    main: colors.red[500],
    dark: colors.red[900],
  },
  warning: {
    light: colors.orange[300],
    main: colors.orange[500],
    dark: colors.orange[700],
  },
  info: {
    light: colors.blue[300],
    main: colors.blue[500],
    dark: colors.blue[700],
  },
  success: {
    light: colors.green[300],
    main: colors.green[500],
    dark: colors.green[700],
  },
  common: colors.common,
  grey: colors.grey,
}
export default function createPalette(paletteOptions) {
  const { type = 'light', contrastThreshold = 3, tonalOffset = 0.2, ...other } = paletteOptions

  const types = { dark, light }

  function getContrastText(background) {
    const contrastText =
      getContrastRatio(background, dark.text.primary) >= contrastThreshold
        ? dark.text.primary
        : light.text.primary

    return contrastText
  }

  const paletteOutput = merge(
    palette,
    { getContrastText },
    { type },
    types[type],
    // Used by `getContrastText()` to maximize the contrast between the background and
    // the text.
    contrastThreshold,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset,
    { ...other },
  )

  return paletteOutput
}
