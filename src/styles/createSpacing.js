function createUnarySpacing(spacing = 8) {
  if (typeof spacing === 'number') {
    return (abs) => {
      return spacing * abs
    }
  }

  if (Array.isArray(spacing)) {
    return (abs) => {
      return spacing[abs]
    }
  }

  if (typeof spacing === 'function') {
    return spacing
  }

  return () => undefined
}

export default function createSpacing(themeSpacing = 8) {
  const transform = createUnarySpacing(themeSpacing)
  const spacing = (...args) => {
    if (args.length === 0) {
      return transform(1)
    }

    if (args.length === 1) {
      return transform(args[0])
    }

    return args
      .map((argument) => {
        if (typeof argument === 'string') {
          return argument
        }
        const output = transform(argument)
        return typeof output === 'number' ? `${output}px` : output
      })
      .join(' ')
  }

  return spacing
}
