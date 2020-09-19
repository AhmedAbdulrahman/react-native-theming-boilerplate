import * as React from 'react'
import PropTypes from 'prop-types'
import { Animated, StyleSheet, Platform } from 'react-native'
import { useTheme } from 'styled-components'
import ProductCard from 'containers/ProductCard'

const ProductFlatList = (props) => {
  const { children, section, ...other } = props
  const theme = useTheme()

  const ITEM_SIZE =
    Platform.OS === 'ios'
      ? theme.extras.constants.WINDOW_WIDTH * 0.68
      : theme.extras.constants.WINDOW_WIDTH * 0.74
  const FULLSIZE = ITEM_SIZE + theme.spacing() * 2
  const IMAGE_SIZE = theme.extras.constants.WINDOW_WIDTH * 0.4

  const ITEM_FULLSIZE = IMAGE_SIZE + theme.spacing() * 2

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

      return (
        <ProductCard
          product={item}
          style={{
            // width: ITEM_SIZE,
            // height: ITEM_SIZE * 0.5,
            marginVertical: theme.spacing(),
            marginLeft: theme.spacing(),
            marginRight: theme.spacing(),
          }}
          type="hero"
          MediaContaierProps={{
            style: [
              {
                height: ITEM_SIZE * 0.6,
                width: ITEM_SIZE,
                overflow: 'hidden',
                borderRadius: theme.spacing(1.2),
              },
            ],
          }}
          MediaProps={{
            animated: true,
            rounded: true,
            style: [
              //   styles.heroMedia,
              StyleSheet.absoluteFillObject,
              {
                opacity,
                transform: [{ scale }],
                width: ITEM_SIZE,
                height: ITEM_SIZE,
                resizeMode: 'cover',
              },
            ],
          }}
        />
      )
    },
    [FULLSIZE, ITEM_SIZE, scrollX, theme],
  )

  const renderListItem = React.useCallback(
    ({ item, index }) => {
      const inputRange = [(index - 1) * FULLSIZE, index * FULLSIZE, (index + 1) * FULLSIZE]

      const scale = scrollX.interpolate({
        inputRange,
        outputRange: [1.2, 1.3, 1.2],
      })

      return (
        <ProductCard
          type="normal"
          style={{
            margin: theme.spacing(),
          }}
          product={item}
          MediaContaierProps={{
            style: [
              {
                height: ITEM_SIZE * 0.5,
                width: ITEM_SIZE * 0.72,
                overflow: 'hidden',
                borderRadius: theme.spacing(1.2),
              },
            ],
          }}
          MediaProps={{
            animated: true,
            rounded: true,
            style: [
              //   styles.normalItemMedia,
              StyleSheet.absoluteFillObject,
              {
                transform: [{ scale }],
                width: ITEM_FULLSIZE * 1.3,
                height: IMAGE_SIZE * 0.8,
                resizeMode: 'cover',
              },
            ],
          }}
        />
      )
    },
    [FULLSIZE, IMAGE_SIZE, scrollX, theme],
  )

  return (
    <Animated.FlatList
      data={section.sectionContent}
      horizontal
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
}

export default ProductFlatList
