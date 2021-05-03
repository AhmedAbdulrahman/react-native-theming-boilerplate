import * as React from 'react'
import PropTypes from 'prop-types'
import ProductMedia from 'containers/ProductMedia'
import Typography from 'components/Typography'
import Flex from 'components/Flex'
import Spacing from 'components/Spacing'

const ProductListItem = (props) => {
  const { item } = props

  return (
    <Flex key={item} flexDirection="row" mt={2} mb={2}>
      <Spacing container mr={2}>
        <ProductMedia uri={item.uri} MediaProps={{ width: 35, height: 25 }} />
      </Spacing>
      <Flex>
        <Spacing container>
          <Typography color="dark" variant="h6">
            {item.title}
          </Typography>
          <Typography color="dark" variant="body1" gutterTop>
            {item.description}
          </Typography>
          <Spacing container mt={2} fd="row" jc="space-between">
            <Typography color="textSecondary" variant="body1">
              $$ • Asiatisch
            </Typography>
            <Typography color="success" variant="body1">
              USD7.4
            </Typography>
          </Spacing>
        </Spacing>
      </Flex>
    </Flex>
  )
}

ProductListItem.propTypes = {
  item: PropTypes.object,
}

export default React.memo(ProductListItem)
