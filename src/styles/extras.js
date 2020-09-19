import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')
/**
 * Extra data used to further extend the `theme` object.
 *
 * Add desired settings below to keep a high project consistency. Think twice
 * before adding unnecessary values.
 */

export const constants = {
  TOOLBAR_MIN_HEIGHT_DENSE: 50,
  TOOLBAR_MIN_HEIGHT_RESPONSIVE: 56,
  TOOLBAR_MIN_HEIGHT: 56,
  WINDOW_HEIGHT: height,
  WINDOW_WIDTH: width,
}

export default {
  constants,
}
