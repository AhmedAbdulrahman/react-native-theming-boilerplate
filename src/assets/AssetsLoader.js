import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { AppLoading } from 'expo'
import { AsyncStorage } from 'react-native'
import Constants from 'expo-constants'
import { useLoadAssets } from 'hooks'

const NAVIGATION_STATE_KEY = `NAVIGATION_STATE_KEY-${Constants.manifest.sdkVersion}`

const AssetsLoader = React.forwardRef(function Navigation(props, ref) {
  const { assets, fonts, children } = props

  const [isNavigationReady, setIsNavigationReady] = React.useState(!__DEV__)
  const [initialState, setInitialState] = React.useState()
  const { ready } = useLoadAssets(assets, fonts)

  React.useEffect(() => {
    const restoreState = async () => {
      try {
        const savedStateString = await AsyncStorage.getItem(NAVIGATION_STATE_KEY)
        const state = savedStateString ? JSON.parse(savedStateString) : undefined
        setInitialState(state)
      } finally {
        setIsNavigationReady(true)
      }
    }

    if (!isNavigationReady) {
      restoreState()
    }
  }, [isNavigationReady])

  const onStateChange = React.useCallback(
    (state) => AsyncStorage.setItem(NAVIGATION_STATE_KEY, JSON.stringify(state)),
    [],
  )

  if (!ready || !isNavigationReady) {
    return <AppLoading />
  }
  return (
    <NavigationContainer ref={ref} {...{ onStateChange, initialState }}>
      {children}
    </NavigationContainer>
  )
})
export default AssetsLoader
