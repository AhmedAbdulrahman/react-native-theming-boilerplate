export default function createBreakpoints(breakpoints) {
  const {
    values = {
      xs: 0,
      sm: 768,
      md: 1024,
    },
    unit = 'px',
    step = 5,
    ...other
  } = breakpoints

  const keys = Object.keys(values)

  function width(key) {
    return values[key]
  }

  return {
    keys,
    values,
    width,
    ...other,
  }
}
