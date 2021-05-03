import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { useTheme } from 'styled-components'
import Spacing from 'components/Spacing'
import Typography from 'components/Typography'
import SvgIcon from 'components/SvgIcon'
import Button from 'components/Button'

export const MIN_HEADER_HEIGHT = 150

const ProductHeader = ({ resturant }) => {
  const theme = useTheme()
  return (
    <Spacing mb={3} mt={1}>
      <View>
        <Spacing container mt={3}>
          <Typography color="dark" variant="h3">
            {resturant.title}
          </Typography>
          <Typography color="textSecondary" variant="subtitle" gutterTop>
            {resturant.types?.join(' • ')}
          </Typography>
          <Spacing container mt={2} mb={2} fd="row" ai="center">
            <Typography color="grey" variant="body1">
              4.3
            </Typography>
            <Spacing mr={1} ml={1}>
              <SvgIcon icon="Star" color={theme.palette.success.main.string()} />
            </Spacing>
            <Typography color="grey" variant="body1">
              200+ Ratings
            </Typography>
          </Spacing>
        </Spacing>

        <Spacing container mt={2} fd="row" jc="space-between" ai="center">
          <Spacing container fd="row">
            <Spacing container mr={2} fd="row">
              <SvgIcon
                icon="Active"
                width={24}
                height={28}
                color={theme.palette.success.main.string()}
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  position: 'absolute',
                  top: -5,
                  left: -8,
                }}
              />
              <SvgIcon icon="Currency" color={theme.palette.success.main.string()} />
              <Spacing container ml={1}>
                <Typography color="dark" variant="subtitle2">
                  Free
                </Typography>
                <Typography color="textSecondary" variant="body2">
                  Delivery
                </Typography>
              </Spacing>
            </Spacing>
            <Spacing container fd="row">
              <SvgIcon
                icon="Active"
                width={24}
                height={28}
                color={theme.palette.success.main.string()}
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  position: 'absolute',
                  top: -5,
                  left: -8,
                }}
              />
              <SvgIcon icon="Time" color={theme.palette.success.main.string()} />
              <Spacing container ml={1}>
                <Typography color="dark" variant="subtitle2">
                  25
                </Typography>
                <Typography color="textSecondary" variant="body2">
                  Minutes
                </Typography>
              </Spacing>
            </Spacing>
          </Spacing>
          <Button size="medium" color="success" variant="outlined" borderRadius={2}>
            Take away
          </Button>
        </Spacing>
      </View>
    </Spacing>
  )
}

ProductHeader.propTypes = {
  resturant: PropTypes.object,
}

export default ProductHeader
