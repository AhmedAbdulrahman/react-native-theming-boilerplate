import * as React from 'react'
import PropTypes from 'prop-types'
import { useTheme } from 'styled-components'
import { View } from 'react-native'

const styleMap = {
  m: 'margin',
  p: 'padding',
  t: 'Top',
  r: 'Right',
  b: 'Bottom',
  l: 'Left',
  f: 'flex',
  d: 'Direction',
  j: 'justify',
  c: 'Content',
  a: 'align',
  i: 'Items',
  w: 'Wrap',
  o: 'Flow',
}

const Spacing = (props) => {
  const { children: childrenProp, container = false } = props
  const theme = useTheme()
  const styleKeys = Object.keys(props).filter(
    (key) => key.search(/(mt|mr|mb|ml|pt|pr|pb|pl|fd|jc|ai|fw|fo|f)/g) !== -1,
  )

  const getStyle = (child) => {
    return styleKeys.reduce(
      (acc, key) => {
        const type = key[0]
        const side = key[1]

        acc[`${styleMap[type]}${styleMap[side]}`] = ['f', 'j', 'a'].includes(type)
          ? props[key]
          : theme.spacing(props[key])
        return acc
      },

      container ? { ...props?.style } : { ...child?.props.style },
    )
  }

  const children =
    React.Children.map(childrenProp, (child) => {
      if (!React.isValidElement(child)) {
        return child
      }

      return React.cloneElement(child, !container && { style: getStyle(child) })
    }) ?? null

  return container ? <View {...getStyle()}>{children}</View> : <>{children}</>
}

Spacing.propTypes = {
  children: PropTypes.node,
  container: PropTypes.bool,
  style: PropTypes.object,
}

export default Spacing
