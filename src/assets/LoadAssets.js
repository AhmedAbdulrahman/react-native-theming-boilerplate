import React from 'react'
import AssetsLoader from './AssetsLoader'
import fonts from './fonts'

function LoadAssets(props) {
  const { children } = props

  return <AssetsLoader {...{ fonts }}>{children}</AssetsLoader>
}
export default LoadAssets
