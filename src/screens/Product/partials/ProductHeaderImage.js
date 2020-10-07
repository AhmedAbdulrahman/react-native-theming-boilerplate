import React from 'react'
import PropTypes from 'prop-types'
import { Dimensions, ImageBackground } from 'react-native'
import styled, { useTheme } from 'styled-components'
import Animated from 'react-native-reanimated'
import { Feather as Icon } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import Constants from 'expo-constants'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

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
const ICON_SIZE = 24

const ProductHeaderImage = ({ uri, y }) => {
  const { goBack } = useNavigation()
  const theme = useTheme()
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
  return (
    <BackgroundMedia source={{ uri }} style={{ top, height }}>
      <TouchableWithoutFeedback
        onPress={() => goBack()}
        style={{
          marginTop: Constants.statusBarHeight * 1,
          ...theme.mixins.container,
        }}
      >
        <Icon name="arrow-left" size={ICON_SIZE} color="white" />
      </TouchableWithoutFeedback>
    </BackgroundMedia>
  )
}

ProductHeaderImage.propTypes = {
  uri: PropTypes.string,
  y: PropTypes.object,
}

export default ProductHeaderImage
