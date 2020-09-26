import * as React from 'react'
import PropTypes from 'prop-types'
import { Pressable } from 'react-native'
import styled from 'styled-components'
import ProductMedia from 'containers/ProductMedia'
import Link from 'navigation/Link'
import ProductToolbar from 'containers/ProductToolbar'
import { Routes } from 'navigation/Routes'

const Root = styled.View({})

const Media = styled(ProductMedia)({
  flexGrow: 1,
})

const ProductCard = React.forwardRef(function ProductCard(props, ref) {
  const { product, MediaProps, MediaContaierProps, ...other } = props

  return (
    <Root ref={ref} {...other}>
      <Link to={Routes.Product} component={Pressable} params={{ product }}>
        <Root {...MediaContaierProps}>
          <Media uri={product.uri} style={{ aspectRatio: 2 / 3 }} {...MediaProps} />
        </Root>
      </Link>
      <ProductToolbar {...product} />
    </Root>
  )
})

ProductCard.propTypes = {
  isFeatured: PropTypes.bool,
  product: PropTypes.object,
  MediaProps: PropTypes.object,
  MediaContaierProps: PropTypes.object,
  LinkProps: PropTypes.object,
}

export default React.memo(ProductCard)
