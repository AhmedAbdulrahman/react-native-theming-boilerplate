import * as React from 'react'
import PropTypes from 'prop-types'
import Animated, { interpolate, Extrapolate } from 'react-native-reanimated'
import { StyleSheet } from 'react-native'
import { useTheme } from 'styled-components'

const Dot = ({ index, currentIndex, backgroundColor }) => {
  const theme = useTheme()
  const opacity = interpolate(currentIndex, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [0.5, 1, 0.5],
    extrapolate: Extrapolate.CLAMP,
  })

  const scale = interpolate(currentIndex, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [1, 1.25, 0.5],
    extrapolate: Extrapolate.CLAMP,
  })
  return (
    <Animated.View
      style={[
        styles.dot,
        {
          backgroundColor: backgroundColor || theme.palette.success.main.string(),
          opacity,
          transform: [{ scale }],
        },
      ]}
    />
  )
}

Dot.propTypes = {
  index: PropTypes.number,
  currentIndex: PropTypes.object,
}

const styles = StyleSheet.create({
  dot: {
    backgroundColor: 'green',
    width: 8,
    height: 5,
    borderRadius: 4,
    margin: 4,
  },
})

export default Dot
