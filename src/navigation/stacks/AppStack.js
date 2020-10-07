import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import AuthenticationNavigator from 'screens/Authentication'
import HomeNavigator from 'screens/Home'

const AppStack = createStackNavigator()

const AppStackScreen = () => {
  return (
    <AppStack.Navigator headerMode="none" initialRouteName="Home">
      <AppStack.Screen name="Authentication" component={AuthenticationNavigator} />
      <AppStack.Screen name="Home" component={HomeNavigator} />
    </AppStack.Navigator>
  )
}

export default AppStackScreen
