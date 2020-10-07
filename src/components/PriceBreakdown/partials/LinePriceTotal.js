import * as React from 'react'
import PropTypes from 'prop-types'
import Typography from 'components/Typography'
import LinePrice from './LinePrice'

const LinePriceTotal = (props) => {
  const { label, value } = props
  return (
    <LinePrice isTotal>
      <Typography variant="subtitle1">{label}</Typography>
      <Typography variant="subtitle1">{value}</Typography>
    </LinePrice>
  )
}

LinePriceTotal.propTypes = {
  label: PropTypes.string,
  value: PropTypes.number,
}

export default LinePriceTotal
