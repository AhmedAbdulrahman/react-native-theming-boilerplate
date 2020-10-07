import * as React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { LoadAssets } from 'modules'
import AppProvider from 'containers/App'
import withStorybook from './src/hocs/withStorybook'

function App() {
  return (
    <AppProvider>
      <SafeAreaProvider>
        <LoadAssets>
          <App />
        </LoadAssets>
      </SafeAreaProvider>
    </AppProvider>
  )
}

// eslint-disable-next-line no-undef
export default __DEV__ ? withStorybook(App) : App
