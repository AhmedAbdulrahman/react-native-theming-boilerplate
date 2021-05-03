import blue from './blue'
import blueGrey from './blueGrey'
import common from './common'
import grey from './grey'
import green from './green'
import orange from './orange'
import red from './red'
import pink from './pink'
import colorize from './colorize'

export const colorsMap = {
  blue,
  blueGrey,
  common,
  green,
  grey,
  orange,
  red,
  pink,
}

const colors = Object.keys(colorsMap).reduce((shadesMap, shadeMapKey) => {
  shadesMap[shadeMapKey] = colorize(colorsMap[shadeMapKey])
  return shadesMap
}, {})

export default colors
