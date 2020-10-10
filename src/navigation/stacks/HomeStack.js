import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from 'screens/Home'
import ProductScreen from 'screens/Product'
import { Routes } from 'navigation/Routes'

const HomeStack = createStackNavigator()

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator headerMode="none">
      <HomeStack.Screen name={Routes.Home} component={HomeScreen} />
      <HomeStack.Screen name={Routes.Product} component={ProductScreen} />
    </HomeStack.Navigator>
  )
}

export default HomeStackScreen
