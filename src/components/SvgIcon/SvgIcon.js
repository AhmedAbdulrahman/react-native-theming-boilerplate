import * as React from 'react'
import PropTypes from 'prop-types'
import * as SvgIconAssets from 'assets/icons'

const SvgIcon = (props) => {
  const { icon, width, height, ...other } = props

  if (!icon) {
    return null
  }

  const IconComponent = SvgIconAssets[icon]

  return <IconComponent width={width} height={height} {...other} />
}

SvgIcon.propTypes = {
  icon: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
}

SvgIcon.defaultProps = {
  width: 24,
  height: 24,
}
export default React.memo(SvgIcon)
