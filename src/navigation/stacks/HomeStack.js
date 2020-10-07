import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { useTheme } from 'styled-components'
import { useAppHandlers, useApp } from 'containers/App/AppContext'
import HomeScreen from 'screens/Home'
import Button from 'components/Button'
import ProductScreen from 'screens/Product'
import { Routes } from 'navigation/Routes'

const HomeStack = createStackNavigator()

const HomeStackScreen = () => {
  const { onThemeToggle } = useAppHandlers()
  const { currentTheme } = useApp()

  const theme = useTheme()

  return (
    <HomeStack.Navigator
      screenOptions={{
        headerTitleStyle: {
          color: theme.palette.text.primary.rgb().string(),
        },
        headerStyle: {
          backgroundColor: theme.palette.background.default.rgb().string(),
          borderBottomWidth: 0,
        },
        headerTintColor: 'white',
        headerLeft: () => <Button onPress={onThemeToggle}>{currentTheme}</Button>,
      }}
    >
      <HomeStack.Screen name={Routes.Home} component={HomeScreen} />
      <HomeStack.Screen name={Routes.Product} component={ProductScreen} />
    </HomeStack.Navigator>
  )
}

export default HomeStackScreen
