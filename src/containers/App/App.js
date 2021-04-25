import * as React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import { InitialState, NavigationContainer, DefaultTheme } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Constants from 'expo-constants'
import { StatusBar } from 'expo-status-bar'
import { useLoadAssets } from 'hooks'
import { useApp } from 'containers/App/AppContext'
import createTheme from 'styles/createTheme'
import { ModalProvider } from 'containers/Modal'

const NAVIGATION_STATE_KEY = `NAVIGATION_STATE_KEY-${Constants.manifest.sdkVersion}`

const App = React.forwardRef(function Navigation(props, ref) {
  const { assets, fonts, children } = props
  const [isNavigationReady, setIsNavigationReady] = React.useState(!__DEV__)
  const [initialState, setInitialState] = React.useState(InitialState)

  const { currentTheme } = useApp()
  const ready = useLoadAssets(assets || [], fonts || {})

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
    return null
  }

  return (
    <ThemeProvider {...{ theme }}>
      <SafeAreaProvider>
        <ModalProvider>
          <StatusBar style={statusBarColor} />
          <NavigationContainer ref={ref} theme={customTheme} {...{ onStateChange, initialState }}>
            {children}
          </NavigationContainer>
        </ModalProvider>
      </SafeAreaProvider>
    </ThemeProvider>
  )
})

App.propTypes = {
  children: PropTypes.node,
  fonts: PropTypes.object,
  assets: PropTypes.array,
}
export default App
