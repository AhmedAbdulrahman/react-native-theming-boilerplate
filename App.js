import * as React from 'react'
import AppProvider from 'containers/App/AppContext'
import App from 'containers/App'
import AppStack from 'navigation/stacks'
// import withStorybook from './src/hocs/withStorybook'

export default function Root() {
  return (
    <AppProvider>
      <App>
        <AppStack />
      </App>
    </AppProvider>
  )
}

// export default __DEV__ ? withStorybook(Root) : Root
