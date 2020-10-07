export default function createMixins(spacing, mixins) {
  // eslint-disable-next-line no-shadow
  function position(position, ...args) {
    const keys = ['top', 'right', 'bottom', 'left']
    const map = [
      [0, 0, 0, 0],
      [0, 1, 0, 1],
      [0, 1, 2, 1],
      [0, 1, 2, 3],
    ]

    if (args.length === 0) {
      args = [0, 0, 0, 0]
    }

    const styles = { position }
    keys.forEach((key, idx) => {
      styles[key] = args[map[args.length - 1][idx]]
    })

    return styles
  }

  return {
    gutters: (amount = 2) => ({
      paddingLeft: spacing(amount),
      paddingRight: spacing(amount),
    }),
    spacing: (amount = 2) => ({
      paddingTop: spacing(amount),
      paddingBottom: spacing(amount),
    }),
    container: {
      paddingLeft: spacing(2),
      paddingRight: spacing(2),
    },
    absolute: (...args) => {
      return position('absolute', ...args)
    },
    ...mixins,
  }
}
