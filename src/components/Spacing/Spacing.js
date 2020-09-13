import * as React from 'react'
import { useTheme } from 'styled-components'

const styleMap = {
  m: 'margin',
  p: 'padding',
  t: 'Top',
  r: 'Right',
  b: 'Bottom',
  l: 'Left',
}

const Spacing = (props) => {
  const { children: childrenProp } = props
  const theme = useTheme()

  const children =
    React.Children.map(childrenProp, (child) => {
      if (!React.isValidElement(child)) {
        return child
      }
      const styleKeys = Object.keys(props).filter(
        (key) => key.search(/(mt|mr|mb|ml|pt|pr|pb|pl)/g) !== -1,
      )
      const style = styleKeys.reduce(
        (acc, key) => {
          const type = key[0]
          const side = key[1]
          acc[`${styleMap[type]}${styleMap[side]}`] = theme.spacing(props[key])
          return acc
        },

        { ...child?.props.style },
      )

      return React.cloneElement(child, { style })
    }) ?? null

  return <>{children}</>
}

export default Spacing
