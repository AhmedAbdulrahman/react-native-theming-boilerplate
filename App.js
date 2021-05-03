/* eslint-disable global-require */
import * as React from 'react'
import AppProvider from 'containers/App/AppContext'
import App from 'containers/App'
import AppStack from 'navigation/stacks'
import withStorybook from './src/hocs/withStorybook'

const fonts = {
  'SFProDisplay-Bold': require('./assets/fonts/SF-Pro-Display-Bold.otf'),
  'SFProDisplay-Semibold': require('./assets/fonts/SF-Pro-Display-Semibold.otf'),
  'SFProDisplay-Regular': require('./assets/fonts/SF-Pro-Display-Regular.otf'),
  'SFProDisplay-Medium': require('./assets/fonts/SF-Pro-Display-Medium.otf'),
}

const assets = []

function Root() {
  return (
    <AppProvider>
      <App assets={assets} fonts={fonts}>
        <AppStack />
      </App>
    </AppProvider>
  )
}

export default __DEV__ ? withStorybook(Root) : Root
