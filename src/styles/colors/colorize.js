import Color from 'color'

export default function colorize(shades) {
  return Object.keys(shades).reduce((shadeMap, shade) => {
    if (shades[shade].length > 0) {
      shadeMap[shade] = Color(shades[shade])
    }
    return shadeMap
  }, {})
}
