import * as React from 'react'
import PropTypes from 'prop-types'
import { Animated } from 'react-native'
import styled from 'styled-components'

const BaseFlatList = styled.FlatList((props) => {
  const { theme, rounded } = props

  return {
    ...(rounded && { borderRadius: theme.spacing(1.2) }),
  }
})

const FlatList = React.forwardRef(function FlatList(props, ref) {
  const { component = BaseFlatList, animated = false, ...other } = props
  const Component = animated ? Animated.createAnimatedComponent(component) : component

  return (
    <Component
      ref={ref}
      renderToHardwareTextureAndroid
      bounces={false}
      snapToAlignment="center"
      scrollEventThrottle={16}
      decelerationRate="fast"
      showsHorizontalScrollIndicator={false}
      {...other}
    />
  )
})

FlatList.propTypes = {
  animated: PropTypes.bool,
  component: PropTypes.element,
}

export default React.memo(FlatList)
