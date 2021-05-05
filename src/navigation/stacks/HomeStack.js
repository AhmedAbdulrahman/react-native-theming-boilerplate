import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ResturantsScreen from 'screens/Resturants'
import HomeScreen from 'screens/Home'
import ProductScreen from 'screens/Product'
import { Routes } from 'navigation/Routes'

const HomeStack = createStackNavigator()

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator screenOptions={{ gestureEnabled: false }}>
      <HomeStack.Screen
        options={{ headerShown: false }}
        name={Routes.Home}
        component={HomeScreen}
      />
      <HomeStack.Screen
        name={Routes.Product}
        component={ProductScreen}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name={Routes.Resturants}
        component={ResturantsScreen}
        options={{
          headerShown: false,
        }}
      />
    </HomeStack.Navigator>
  )
}

export default HomeStackScreen
