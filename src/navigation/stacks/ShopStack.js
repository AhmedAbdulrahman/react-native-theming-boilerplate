import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SearchResultScreen from 'screens/Search/SearchResult'
import SearchScreen from 'screens/Search'
// import ProductScreen from 'screens/Product'
// import ProductGridScreen from 'screens/ProductGridScreen'
import { Routes } from 'navigation/Routes'

const SearchStack = createStackNavigator()

const SearchStackScreen = () => {
  return (
    <SearchStack.Navigator headerMode="none">
      {/* <SearchStack.Screen name={Routes.Products} component={ProductGridScreen} /> */}
      {/* <SearchStack.Screen name={Routes.Product} component={ProductScreen} /> */}
      <SearchStack.Screen name={Routes.Search} component={SearchScreen} />
      <SearchStack.Screen name={Routes.SearchResult} component={SearchResultScreen} />
    </SearchStack.Navigator>
  )
}

export default SearchStackScreen
