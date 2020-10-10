import * as React from 'react'
import PropTypes from 'prop-types'
import * as SvgIconAssets from 'assets/icons'

const SvgIcon = (props) => {
  const { icon, width, height, color, ...other } = props

  if (!icon) {
    return null
  }

  const IconComponent = SvgIconAssets[icon]

  return <IconComponent width={width} height={height} fill={color} {...other} />
}

SvgIcon.propTypes = {
  icon: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
}

SvgIcon.defaultProps = {
  width: 24,
  height: 24,
  color: 'black',
}
export default React.memo(SvgIcon)
