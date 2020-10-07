import * as React from 'react'
import PropTypes from 'prop-types'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { AppLoading } from 'expo'
import { AsyncStorage } from 'react-native'
import Constants from 'expo-constants'
import TabNavigation from 'navigation/TabNavigation'
import { useLoadAssets } from 'hooks'

const NAVIGATION_STATE_KEY = `NAVIGATION_STATE_KEY-${Constants.manifest.sdkVersion}`

const AssetsLoader = React.forwardRef(function Navigation(props, ref) {
  const { NavigationContainerProps, TabNavigationProps, assets, fonts, children, theme } = props

  const customTheme = {
    ...DefaultTheme,
    ...theme,
  }
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
    <NavigationContainer
      ref={ref}
      independent
      theme={customTheme}
      {...NavigationContainerProps}
      {...{ onStateChange, initialState }}
    >
      <TabNavigation {...TabNavigationProps} />
    </NavigationContainer>
  )
})

AssetsLoader.propTypes = {
  children: PropTypes.node,
  NavigationContainerProps: PropTypes.object,
  TabNavigationProps: PropTypes.object,
  assets: PropTypes.array,
  fonts: PropTypes.array,
  theme: PropTypes.object,
}
export default AssetsLoader
