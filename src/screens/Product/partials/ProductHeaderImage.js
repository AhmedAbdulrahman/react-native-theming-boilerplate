import React from 'react'
import PropTypes from 'prop-types'
import { Dimensions, ImageBackground } from 'react-native'
import Animated from 'react-native-reanimated'
import styled from 'styled-components'

const AnimatedMedia = Animated.createAnimatedComponent(ImageBackground)

const BackgroundMedia = styled(AnimatedMedia)(() => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: wWidth,
  resizeMode: 'cover',
}))

const { Extrapolate, interpolate } = Animated
const { height: wHeight, width: wWidth } = Dimensions.get('window')

export const HEADER_IMAGE_HEIGHT = wHeight / 3

const ProductHeaderImage = ({ uri, y }) => {
  const height = interpolate(y, {
    inputRange: [-100, 0],
    outputRange: [HEADER_IMAGE_HEIGHT + 100, HEADER_IMAGE_HEIGHT],
    extrapolateRight: Extrapolate.CLAMP,
  })
  const top = interpolate(y, {
    inputRange: [0, 100],
    outputRange: [0, -100],
    extrapolateLeft: Extrapolate.CLAMP,
  })
  return <BackgroundMedia source={{ uri }} style={{ top, height }} />
}

ProductHeaderImage.propTypes = {
  uri: PropTypes.string,
  y: PropTypes.object,
}

export default ProductHeaderImage
