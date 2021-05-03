import React from 'react'
import PropTypes from 'prop-types'
import { Image } from 'react-native'
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions'
import Animated from 'react-native-reanimated'
import styled from 'styled-components'

const AnimatedMedia = Animated.createAnimatedComponent(Image)
export const HEADER_IMAGE_HEIGHT = responsiveHeight(100) / 3

const HeaderMedia = styled(AnimatedMedia)(() => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: responsiveWidth(100),
  resizeMode: 'cover',
}))

const { Extrapolate, interpolate } = Animated

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
  return <HeaderMedia source={{ uri }} style={{ top, height }} />
}

ProductHeaderImage.propTypes = {
  uri: PropTypes.string,
  y: PropTypes.object,
}

export default ProductHeaderImage
