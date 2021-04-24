import * as React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Flex from 'components/Flex'
import Typography from 'components/Typography'
import Spacing from 'components/Spacing'

const Root = styled(Flex)((props) => ({
  paddingTop: props.theme.spacing(2),
}))

const Rating = styled.View((props) => ({
  backgroundColor: props.theme.palette.success.main.string(),
  paddingVertical: props.theme.spacing(0.3),
  paddingHorizontal: props.theme.spacing(1.3),
  borderRadius: props.theme.spacing(1),
  marginRight: props.theme.spacing(2),
}))

const ProductToolbar = (props) => {
  const { title, address, types, type, isProductScreen, ...other } = props

  return (
    <Root {...other}>
      <Typography color="dark" variant={isProductScreen ? 'h5' : 'h6'}>
        {title}
      </Typography>

      <Spacing mb={1}>
        {type === 'meal' ? (
          <Typography color="textSecondary" variant="body1" gutterTop>
            {address}
          </Typography>
        ) : (
          <Typography color="textSecondary" variant="body1" gutterTop>
            {types?.join(' • ')}
          </Typography>
        )}
      </Spacing>

      <Spacing mt={1}>
        <Flex flexDirection="row" align="center">
          <Rating>
            <Typography color="textWhite" variant="body2">
              4.3
            </Typography>
          </Rating>
          <Spacing mr={1}>
            <Typography color="textSecondary" varia nt="body1">
              25min
            </Typography>
          </Spacing>
          <Spacing mr={1}>
            <Typography color="textSecondary" varia nt="body1">
              •
            </Typography>
          </Spacing>
          <Typography color="textSecondary" variant="body1">
            Free delivery
          </Typography>
        </Flex>
      </Spacing>
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
