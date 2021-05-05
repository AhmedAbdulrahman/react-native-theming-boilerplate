import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import PropTypes from 'prop-types'
import Animated from 'react-native-reanimated'
import { useValue, withTimingTransition } from 'react-native-redash/lib/module/v1'
import { Feather as Icon } from '@expo/vector-icons'
import { useTheme } from 'styled-components'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { HEADER_IMAGE_HEIGHT } from './ProductHeaderImage'
import ProductTabHeader from './ProductTabHeader'

const ICON_SIZE = 24
const PADDING = 16
export const MIN_HEADER_HEIGHT = 45
const { interpolate, Extrapolate, useCode, greaterThan, set, block } = Animated

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  header: {
    flexDirection: 'row',
    height: MIN_HEADER_HEIGHT,
    alignItems: 'center',
    paddingHorizontal: PADDING,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    marginLeft: PADDING,
    flex: 1,
  },
})

const ProductStickyHeader = ({ y, tabs, scrollView, resturant }) => {
  const { goBack } = useNavigation()
  const toggle = useValue(0)
  const insets = useSafeAreaInsets()
  const theme = useTheme()

  const transition = withTimingTransition(toggle, { duration: 100 })
  const { top: paddingTop } = insets
  const translateX = interpolate(y, {
    inputRange: [0, HEADER_IMAGE_HEIGHT * 2],
    outputRange: [-ICON_SIZE - PADDING, 0],
    extrapolate: Extrapolate.CLAMP,
  })

  const opacity = transition
  useCode(() => block([set(toggle, greaterThan(y, HEADER_IMAGE_HEIGHT * 2))]), [toggle, y])
  return (
    <Animated.View style={[styles.container, { paddingTop }]}>
      <Animated.View
        style={{
          ...StyleSheet.absoluteFillObject,
          opacity,
          backgroundColor: theme.palette.background.default.string(),
        }}
      />
      <View style={styles.header}>
        <TouchableWithoutFeedback onPress={() => goBack()}>
          <View>
            <Icon name="arrow-left" size={ICON_SIZE} color="white" />
            <Animated.View style={{ ...StyleSheet.absoluteFillObject, opacity: transition }}>
              <Icon
                name="arrow-left"
                size={ICON_SIZE}
                color={theme.palette.text.primary.string()}
              />
            </Animated.View>
          </View>
        </TouchableWithoutFeedback>
        <Animated.Text
          style={[
            styles.title,
            { color: theme.palette.text.primary.string(), opacity, transform: [{ translateX }] },
          ]}
        >
          {resturant.title}
        </Animated.Text>
      </View>
      <ProductTabHeader {...{ y, transition, tabs, scrollView }} />
    </Animated.View>
  )
}

ProductStickyHeader.propTypes = {
  y: PropTypes.object,
  resturant: PropTypes.object,
  scrollView: PropTypes.object,
  tabs: PropTypes.array,
}
export default ProductStickyHeader
