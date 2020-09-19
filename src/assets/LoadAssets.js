import React from 'react'
import PropTypes from 'prop-types'
import AssetsLoader from './AssetsLoader'
import fonts from './fonts'

function LoadAssets(props) {
  const { children, theme } = props

  return <AssetsLoader {...{ fonts, theme }}>{children}</AssetsLoader>
}

LoadAssets.propTypes = {
  children: PropTypes.node,
  theme: PropTypes.object,
}
export default LoadAssets
