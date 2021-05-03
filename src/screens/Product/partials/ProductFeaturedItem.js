import * as React from 'react'
import PropTypes from 'prop-types'
import ProductMedia from 'containers/ProductMedia'
import Typography from 'components/Typography'
import Spacing from 'components/Spacing'

const ProductFeaturedItem = (props) => {
  const { item, isLastItem } = props

  return (
    <Spacing container key={item} mr={isLastItem ? 0 : 2}>
      <ProductMedia uri={item.uri} MediaProps={{ height: 30 }} />
      <Spacing container mt={2}>
        <Typography color="dark" variant="h6" numberOfLines={1}>
          {item.title}
        </Typography>
        <Typography color="textSecondary" variant="body1" gutterTop>
          {item.types?.join(' . ')}
        </Typography>
      </Spacing>
    </Spacing>
  )
}

ProductFeaturedItem.propTypes = {
  item: PropTypes.object,
  isLastItem: PropTypes.bool,
}

export default React.memo(ProductFeaturedItem)
