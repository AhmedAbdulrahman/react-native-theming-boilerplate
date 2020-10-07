import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { useTheme } from 'styled-components'
import ProductToolbar from 'containers/ProductToolbar'
import Flex from 'components/Flex'
import Spacing from 'components/Spacing'
import Typography from 'components/Typography'
import SvgIcon from 'components/SvgIcon'
import Button from 'components/Button'

export const MIN_HEADER_HEIGHT = 150

const ProductHeader = ({ product }) => {
  const theme = useTheme()
  return (
    <Spacing mb={3} mt={1}>
      <View>
        <ProductToolbar isProductScreen {...product} />
        <Spacing mb={2} mt={1}>
          <Flex flexDirection="row" align="center" justify="space-between" style={{ width: 150 }}>
            <Typography color="grey" variant="body2">
              4.3
            </Typography>
            <SvgIcon icon="Star" color={theme.palette.success.main.string()} />
            <Typography color="grey" variant="body2">
              200+ Ratings
            </Typography>
          </Flex>
        </Spacing>
        <Spacing mt={2}>
          <Flex flexDirection="row" justify="space-between">
            <Flex flexDirection="row">
              <Flex flexDirection="row">
                <Spacing mr={1}>
                  <SvgIcon icon="Currency" color={theme.palette.success.main.string()} />
                </Spacing>
                <Flex>
                  <Typography color="dark" variant="subtitle2">
                    Free
                  </Typography>
                  <Typography color="textSecondary" variant="body2">
                    Delivery
                  </Typography>
                </Flex>
              </Flex>
              <Flex flexDirection="row">
                <Spacing mr={1}>
                  <SvgIcon icon="Time" color={theme.palette.success.main.string()} />
                </Spacing>
                <Flex>
                  <Typography color="dark" variant="subtitle2">
                    25
                  </Typography>
                  <Typography color="textSecondary" variant="body2">
                    Minutes
                  </Typography>
                </Flex>
              </Flex>
            </Flex>
            <Button size="medium" color="success" variant="outlined">
              Take away
            </Button>
          </Flex>
        </Spacing>
      </View>
    </Spacing>
  )
}

ProductHeader.propTypes = {
  product: PropTypes.object,
}

export default ProductHeader
