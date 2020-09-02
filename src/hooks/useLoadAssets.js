import * as Font from 'expo-font'
import React from 'react'
import { Asset } from 'expo-asset'
import usePromiseAll from './usePromiseAll'

const useLoadAssets = (assets = [], fonts = {}) => {
  const [ready, setReady] = React.useState(false)
  usePromiseAll([Font.loadAsync(fonts), ...assets.map((asset) => Asset.loadAsync(asset))], () =>
    setReady(true),
  )
  return { ready }
}

export default useLoadAssets
