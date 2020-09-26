import * as React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Flex from 'components/Flex'
import Typography from 'components/Typography'

const Root = styled(Flex)((props) => ({
  paddingVertical: props.theme.spacing(1),
}))

const ProductToolbar = (props) => {
  const { title, address, types, type, isProductScreen, ...other } = props

  return (
    <Root {...other}>
      <Typography color="dark" variant={isProductScreen ? 'h5' : 'h6'}>
        {title}
      </Typography>

      {type === 'meal' ? (
        <Typography color="textSecondary" variant="body1" gutterTop>
          {address}
        </Typography>
      ) : (
        <Typography color="textSecondary" variant="body1" gutterTop>
          {types?.join(' • ')}
        </Typography>
      )}
    </Root>
  )
}

ProductToolbar.propTypes = {
  address: PropTypes.string,
  isProductScreen: PropTypes.bool,
  title: PropTypes.string,
  type: PropTypes.string,
  types: PropTypes.array,
}

export default React.memo(ProductToolbar)
