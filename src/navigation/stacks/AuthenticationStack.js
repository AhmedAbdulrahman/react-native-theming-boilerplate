import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Routes } from 'navigation/Routes'
import { Onboarding, SignIn, SignUp, ForgotPassword } from 'screens/Authentication'

const AuthenticationStack = createStackNavigator()

export default () => {
  return (
    <AuthenticationStack.Navigator headerMode="none">
      <AuthenticationStack.Screen name={Routes.Onboarding} component={Onboarding} />
      <AuthenticationStack.Screen name={Routes.SignIn} component={SignIn} />
      <AuthenticationStack.Screen name={Routes.SignUp} component={SignUp} />
      <AuthenticationStack.Screen name={Routes.ForgotPassword} component={ForgotPassword} />
    </AuthenticationStack.Navigator>
  )
}
