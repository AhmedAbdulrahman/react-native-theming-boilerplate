import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import { StatusBar } from 'expo-status-bar'
import AuthenticationNavigator from 'screens/Authentication'
import AppProvider from 'containers/App'
import { LoadAssets } from 'assets'
import theme from 'styles/theme/light'
import withStorybook from './src/hocs/withStorybook'

function App() {
  return (
    <ThemeProvider {...{ theme }}>
      <AppProvider>
        <LoadAssets theme={theme}>
          <StatusBar style={theme.palette.type === 'light' ? 'dark' : 'light'} />
          <AuthenticationNavigator />
        </LoadAssets>
      </AppProvider>
    </ThemeProvider>
  )
}

// eslint-disable-next-line no-undef
export default __DEV__ ? withStorybook(App) : App
