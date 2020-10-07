import * as React from 'react'
import PropTypes from 'prop-types'
import { Animated, StyleSheet, Platform } from 'react-native'
import { useTheme } from 'styled-components'
import ProductCard from 'containers/ProductCard'
import Spacing from 'components/Spacing'
import HeroItem from './partials/HeroItem'

const ProductFlatList = (props) => {
  const { children, section, horizontal, ...other } = props
  const theme = useTheme()

  const ITEM_SIZE =
    Platform.OS === 'ios'
      ? theme.extras.constants.WINDOW_WIDTH * 0.68
      : theme.extras.constants.WINDOW_WIDTH * 0.74
  const FULLSIZE = ITEM_SIZE + theme.spacing() * 2
  const IMAGE_SIZE = theme.extras.constants.WINDOW_WIDTH * 0.4

  const ITEM_FULLSIZE = IMAGE_SIZE * 0.7 + theme.spacing() * 2

  const scrollX = React.useRef(new Animated.Value(0)).current

  const renderHeroItem = React.useCallback(
    ({ item, index }) => {
      const inputRange = [(index - 1) * FULLSIZE, index * FULLSIZE, (index + 1) * FULLSIZE]

      const scale = scrollX.interpolate({
        inputRange,
        outputRange: [1.2, 1.5, 1.2],
      })

      const opacity = scrollX.interpolate({
        inputRange,
        outputRange: [0.5, 1, 0.5],
      })

      return <HeroItem item={item} opacity={opacity} scale={scale} itemSize={ITEM_SIZE} />
    },
    [FULLSIZE, ITEM_SIZE, scrollX],
  )

  const renderListItem = React.useCallback(
    ({ item, index }) => {
      const inputRange = [(index - 1) * FULLSIZE, index * FULLSIZE, (index + 1) * FULLSIZE]

      const scale = scrollX.interpolate({
        inputRange,
        outputRange: [1.1, 1.2, 1.1],
      })

      return (
        <Spacing key={item} mb={3}>
          <ProductCard
            type="normal"
            style={{
              marginVertical: theme.spacing(),
              marginLeft: theme.spacing(),
              marginRight: theme.spacing(),
            }}
            product={item}
            MediaContaierProps={{
              style: [
                {
                  height: ITEM_FULLSIZE,
                  width: IMAGE_SIZE * 1.2,
                  overflow: 'hidden',
                  borderRadius: theme.spacing(1.2),
                },
              ],
            }}
            MediaProps={{
              animated: true,
              rounded: true,
              style: [
                StyleSheet.absoluteFillObject,
                {
                  transform: [{ scale }],
                  resizeMode: 'cover',
                },
              ],
            }}
          />
        </Spacing>
      )
    },
    [FULLSIZE, IMAGE_SIZE, ITEM_FULLSIZE, scrollX, theme],
  )

  return (
    <Animated.FlatList
      data={section.sectionContent}
      horizontal={horizontal}
      renderToHardwareTextureAndroid
      bounces={false}
      snapToAlignment="center"
      scrollEventThrottle={16}
      decelerationRate="fast"
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ alignItems: 'center' }}
      renderItem={section.type === 'normal' ? renderListItem : renderHeroItem}
      snapToInterval={section.type === 'normal' ? ITEM_FULLSIZE : FULLSIZE}
      onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
        useNativeDriver: true,
      })}
      {...other}
    />
  )
}

ProductFlatList.propTypes = {
  children: PropTypes.node,
  section: PropTypes.object,
  horizontal: PropTypes.bool,
}

export default ProductFlatList
