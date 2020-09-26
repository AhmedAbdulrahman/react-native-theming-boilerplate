import * as React from 'react'
import { useTheme } from 'styled-components'
import { createStackNavigator } from '@react-navigation/stack'
import { Routes } from 'navigation/Routes'
import SvgIcon from 'components/SvgIcon'
import Home from '../Home'
import Product from '../Product'
import Onboarding from './Onboarding'
import SignIn from './SignIn'
import SignUp from './SignUp'
import ForgotPassword from './ForgotPassword'

const AuthenticationStack = createStackNavigator()

export default () => {
  const theme = useTheme()

  return (
    <AuthenticationStack.Navigator
      initialRouteName={Routes.Home}
      screenOptions={{
        headerTitleStyle: {
          color: theme.palette.text.primary.rgb().string(),
        },
        headerStyle: {
          backgroundColor: theme.palette.background.default.rgb().string(),
          borderBottomWidth: 0,
        },
        headerBackImage: () => {
          return <SvgIcon icon="ChevronLeft" />
        },
        headerTintColor: 'white',
      }}
    >
      <AuthenticationStack.Screen
        name={Routes.Onboarding}
        component={Onboarding}
        options={{
          headerBackTitleVisible: false,
          headerShown: false,
        }}
      />

      <AuthenticationStack.Screen
        options={{
          headerBackTitleVisible: false,
        }}
        name={Routes.SignIn}
        component={SignIn}
      />
      <AuthenticationStack.Screen
        options={{
          headerBackTitleVisible: false,
        }}
        name={Routes.SignUp}
        component={SignUp}
      />
      <AuthenticationStack.Screen
        options={{
          headerBackTitleVisible: false,
        }}
        name={Routes.ForgotPassword}
        component={ForgotPassword}
      />
      <AuthenticationStack.Screen
        options={() => {
          return {
            headerBackTitleVisible: false,
            title: 'San Francisco',
            headerLeft: null,
          }
        }}
        name={Routes.Home}
        component={Home}
      />
      <AuthenticationStack.Screen
        options={{
          headerBackTitleVisible: false,
          headerLeft: null,
          headerShown: false,
        }}
        name={Routes.Product}
        component={Product}
      />
    </AuthenticationStack.Navigator>
  )
}
