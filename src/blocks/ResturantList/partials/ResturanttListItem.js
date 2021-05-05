import * as React from 'react'
import PropTypes from 'prop-types'
import { Platform } from 'react-native'
import { useTheme } from 'styled-components'
import ProductCard from 'containers/ProductCard'
import Spacing from 'components/Spacing'

const ResturanttListItem = (props) => {
  const { animated, horizontal, resturant, index, scrollX } = props
  const theme = useTheme()

  const ITEM_SIZE =
    Platform.OS === 'ios'
      ? theme.extras.constants.WINDOW_WIDTH * 0.68
      : theme.extras.constants.WINDOW_WIDTH * 0.74
  const IMAGE_SIZE = 65

  const inputRange = [(index - 1) * ITEM_SIZE, index * ITEM_SIZE, (index + 1) * ITEM_SIZE]
  const scale = scrollX.interpolate({
    inputRange,
    outputRange: [1, 1.1, 1],
  })

  const MediaProps = {
    ...(animated && { height: 38 }),
    width: animated ? IMAGE_SIZE : ITEM_SIZE * 0.33,
    animated,
    ...(animated && {
      style: [
        {
          transform: [{ scale }],
        },
      ],
    }),
  }

  return (
    <Spacing container key={resturant} mb={4} mr={horizontal ? 2 : 0}>
      <ProductCard horizontal={horizontal} item={resturant} {...{ MediaProps }} />
    </Spacing>
  )
}

ResturanttListItem.propTypes = {
  animated: PropTypes.bool,
  index: PropTypes.number,
  horizontal: PropTypes.bool,
  resturant: PropTypes.object,
  scrollX: PropTypes.object,
}
export default ResturanttListItem
