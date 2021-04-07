import * as React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Typography from 'components/Typography'
import LinePrice from './partials/LinePrice'
import LinePriceTotal from './partials/LinePriceTotal'

const Root = styled.View((props) => ({
  flex: 1,
  padding: props.theme.spacing(3, 2),
  borderRadius: 4,
  backgroundColor: props.theme.palette.success.light.fade(0.8),
}))

const PriceBreakdown = React.forwardRef(function PriceBreakdown(props, ref) {
  const {
    subtotal,
    total,
    isPaid,
    discount,
    hasDiscount = false,
    isRefunded,
    showBreakdownTotal = false,
    ...other
  } = props

  return (
    <Root ref={ref} {...other}>
      <LinePrice>
        <Typography>Subtotal</Typography>
        <Typography>{subtotal}</Typography>
      </LinePrice>

      <LinePrice>
        <Typography>Delivery</Typography>
        <Typography>{subtotal}</Typography>
      </LinePrice>

      {hasDiscount && (
        <LinePrice>
          <Typography>discount</Typography>
          <Typography>{discount}</Typography>
        </LinePrice>
      )}

      {!showBreakdownTotal && <LinePriceTotal label="Subtotal (excl. VAT)" value={total} />}

      {showBreakdownTotal && <LinePriceTotal label="Total (incl. VAT)" value={total} />}

      {showBreakdownTotal && isPaid && <LinePriceTotal label="paid" value={total} />}

      {showBreakdownTotal && isRefunded && <LinePriceTotal label="refunded" value={total} />}
    </Root>
  )
})

PriceBreakdown.propTypes = {
  subtotal: PropTypes.number,
  total: PropTypes.number,
  isPaid: PropTypes.bool,
  discount: PropTypes.number,
  hasDiscount: PropTypes.bool,
  isRefunded: PropTypes.bool,
  showBreakdownTotal: PropTypes.bool,
}
export default React.memo(PriceBreakdown)
