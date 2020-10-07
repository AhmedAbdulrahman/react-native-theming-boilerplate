import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { useTheme } from 'styled-components'
import SearchScreen from 'screens/Search'
import ProductScreen from 'screens/Product'
import ProductGridScreen from 'screens/ProductGridScreen'
import { Routes } from 'navigation/Routes'

const ShopStack = createStackNavigator()

const ShopStackScreen = () => {
  const theme = useTheme()

  return (
    <ShopStack.Navigator
      screenOptions={{
        headerTitleStyle: {
          color: theme.palette.text.primary.rgb().string(),
        },
        headerStyle: {
          backgroundColor: theme.palette.background.default.rgb().string(),
          borderBottomWidth: 0,
        },
        headerTintColor: 'white',
      }}
    >
      {/* <ShopStack.Screen name={Routes.Products} component={ProductGridScreen} /> */}
      {/* <ShopStack.Screen name={Routes.Product} component={ProductScreen} /> */}
      <ShopStack.Screen name={Routes.Search} component={SearchScreen} />
    </ShopStack.Navigator>
  )
}

export default ShopStackScreen
