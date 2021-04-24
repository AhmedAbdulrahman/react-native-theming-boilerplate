import * as React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet } from 'react-native'
import { useTheme } from 'styled-components'
import ProductCard from 'containers/ProductCard'
import Spacing from 'components/Spacing'

const HeroItem = (props) => {
  const { item, itemSize, opacity, scale, ...other } = props

  const theme = useTheme()

  return (
    <Spacing key={item} mb={4}>
      <ProductCard
        product={item}
        style={{
          marginVertical: theme.spacing(),
          marginLeft: theme.spacing(),
          marginRight: theme.spacing(),
        }}
        type="hero"
        MediaContaierProps={{
          style: {
            width: itemSize,
            height: itemSize * 0.6,
            overflow: 'hidden',
            borderRadius: theme.spacing(1.2),
          },
        }}
        MediaProps={{
          animated: true,
          rounded: true,
          style: [
            StyleSheet.absoluteFillObject,
            {
              opacity,
              transform: [{ scale }],
              resizeMode: 'cover',
            },
          ],
        }}
        {...other}
      />
    </Spacing>
  )
}

HeroItem.propTypes = {
  item: PropTypes.object,
  itemSize: PropTypes.number,
  opacity: PropTypes.object,
  scale: PropTypes.object,
}

export default React.memo(HeroItem)
