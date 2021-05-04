import * as React from 'react'
import PropTypes from 'prop-types'
import { Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styled from 'styled-components'
import ProductMedia from 'containers/ProductMedia'
import ProductToolbar from 'containers/ProductToolbar'
import { Routes } from 'navigation/Routes'

const Link = styled(Pressable)(() => ({
  flex: 1,
}))

const ProductCard = React.forwardRef(function ProductCard(props, ref) {
  const { item, horizontal, MediaProps, MediaContaierProps, ...other } = props
  const navigation = useNavigation()

  const handlePress = React.useCallback(() => {
    navigation.push(Routes.Product, { data: item })
  }, [item, navigation])

  return (
    <Link ref={ref} onPress={handlePress} {...other}>
      <ProductMedia uri={item.uri} {...{ MediaProps }} />
      <ProductToolbar horizontal={horizontal} {...item} />
    </Link>
  )
})

ProductCard.propTypes = {
  item: PropTypes.object,
  MediaProps: PropTypes.object,
  MediaContaierProps: PropTypes.object,
  LinkProps: PropTypes.object,
  horizontal: PropTypes.bool,
}

export default React.memo(ProductCard)
