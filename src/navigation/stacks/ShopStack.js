import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SearchScreen from 'screens/Search'
// import ProductScreen from 'screens/Product'
// import ProductGridScreen from 'screens/ProductGridScreen'
import { Routes } from 'navigation/Routes'

const ShopStack = createStackNavigator()

const ShopStackScreen = () => {
  return (
    <ShopStack.Navigator headerMode="none">
      {/* <ShopStack.Screen name={Routes.Products} component={ProductGridScreen} /> */}
      {/* <ShopStack.Screen name={Routes.Product} component={ProductScreen} /> */}
      <ShopStack.Screen name={Routes.Search} component={SearchScreen} />
    </ShopStack.Navigator>
  )
}

export default ShopStackScreen
