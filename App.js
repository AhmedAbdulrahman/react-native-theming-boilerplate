import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { ThemeProvider } from '@shopify/restyle'
import { LoadAssets } from './src/assets'
import AppProvider from 'containers/App'
import { Onboarding } from 'screens/Authentication'
import theme from 'styles/theme/light'

const AuthenticationStack = createStackNavigator()

function AuthenticationNavigator() {
  return (
    <AuthenticationStack.Navigator headerMode="none">
      <AuthenticationStack.Screen name="Onboarding" component={Onboarding} />
    </AuthenticationStack.Navigator>
  )
}

export default function App() {
  return (
    <ThemeProvider {...{ theme }}>
      <AppProvider>
        <LoadAssets>
          <AuthenticationNavigator />
        </LoadAssets>
      </AppProvider>
    </ThemeProvider>
  )
}
