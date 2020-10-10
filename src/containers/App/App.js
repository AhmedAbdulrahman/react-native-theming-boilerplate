import * as React from 'react'
import PropTypes from 'prop-types'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { AppLoading } from 'expo'
import { AsyncStorage } from 'react-native'
import Constants from 'expo-constants'
import { ThemeProvider } from 'styled-components'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { useLoadAssets } from 'hooks'
import { useApp } from 'containers/App/AppContext'
import { fonts } from 'modules'
import createTheme from 'styles/createTheme'

const NAVIGATION_STATE_KEY = `NAVIGATION_STATE_KEY-${Constants.manifest.sdkVersion}`

const App = React.forwardRef(function Navigation(props, ref) {
  const { NavigationContainerProps, assets, children } = props

  const [isNavigationReady, setIsNavigationReady] = React.useState(!__DEV__)
  const [initialState, setInitialState] = React.useState()

  const { ready } = useLoadAssets(assets, fonts)
  const { currentTheme } = useApp()

  const theme = createTheme({
    palette: { type: currentTheme === 'light' ? 'light' : 'dark' },
  })

  const statusBarColor = currentTheme === 'light' ? 'dark' : 'light'

  const customTheme = {
    ...DefaultTheme,
    ...theme,
  }

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
    <ThemeProvider {...{ theme }}>
      <SafeAreaProvider>
        <StatusBar style={statusBarColor} />
        <NavigationContainer
          ref={ref}
          independent
          theme={customTheme}
          {...NavigationContainerProps}
          {...{ onStateChange, initialState }}
        >
          {children}
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  )
})

App.propTypes = {
  children: PropTypes.node,
  NavigationContainerProps: PropTypes.object,
  TabNavigationProps: PropTypes.object,
  assets: PropTypes.array,
  theme: PropTypes.object,
}
export default React.memo(App)
