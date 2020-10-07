import * as React from 'react'
import { enableScreens } from 'react-native-screens'
import { AppStack } from 'navigation/stacks'

// for native screen optimization https://reactnavigation.org/docs/react-native-screens
enableScreens()

const App = () => {
  return <AppStack />
}

export default App
