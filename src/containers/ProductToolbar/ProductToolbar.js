import * as React from 'react'
import PropTypes from 'prop-types'
import styled, { useTheme } from 'styled-components'
import Typography from 'components/Typography'
import Spacing from 'components/Spacing'
import SvgIcon from 'components/SvgIcon'

const Rating = styled.View((props) => {
  const { theme, transparent } = props
  return {
    ...(!transparent && { backgroundColor: theme.palette.success.main.string() }),
    paddingVertical: theme.spacing(0.3),
    paddingHorizontal: theme.spacing(1.3),
    borderRadius: theme.spacing(1),
  }
})

const ProductToolbar = (props) => {
  const { title, types, horizontal } = props
  const theme = useTheme()
  return (
    <Spacing container mt={2}>
      <Typography color="dark" variant="subhead">
        {title}
      </Typography>
      <Typography color="textSecondary" variant={!horizontal ? 'subtitle' : 'body1'} gutterTop>
        {types?.join(' • ')}
      </Typography>

      <Spacing container mt={1} fd="row" ai="center">
        {horizontal ? (
          <Spacing mr={2}>
            <Rating>
              <Typography color="textWhite" variant="body1">
                4.3
              </Typography>
            </Rating>

            <Typography color="grey" variant="body1">
              25min
            </Typography>

            <Typography color="grey" variant="body1">
              Free delivery
            </Typography>
          </Spacing>
        ) : (
          <Spacing container fd="row" jc="center" ai="center">
            <Typography color="grey" variant="body1">
              4.3
            </Typography>
            <Spacing mr={1} ml={1}>
              <SvgIcon icon="Star" color={theme.palette.success.main.string()} />
            </Spacing>
            <Typography color="grey" variant="body1">
              200+ Ratings
            </Typography>
            <Spacing container fd="row" jc="center" ai="center" mr={1} ml={1}>
              <Spacing mr={1} ml={1}>
                <SvgIcon icon="Time" color={theme.palette.success.main.string()} />
              </Spacing>
              <Typography color="grey" variant="body1">
                25 Min
              </Typography>
            </Spacing>
            <Spacing container fd="row" jc="center" ai="center" mr={1} ml={1}>
              <Spacing mr={1} ml={1}>
                <SvgIcon icon="Currency" color={theme.palette.success.main.string()} />
              </Spacing>
              <Typography color="grey" variant="body1">
                Free
              </Typography>
            </Spacing>
          </Spacing>
        )}
      </Spacing>
    </Spacing>
  )
}

ProductToolbar.propTypes = {
  horizontal: PropTypes.bool,
  title: PropTypes.string,
  types: PropTypes.array,
}

export default React.memo(ProductToolbar)
