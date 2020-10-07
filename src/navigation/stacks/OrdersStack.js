import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { useTheme } from 'styled-components'
import OrdersScreen from 'screens/Member/Orders'
import { Routes } from 'navigation/Routes'

const OrdersStack = createStackNavigator()

const OrdersStackScreen = () => {
  const theme = useTheme()
  return (
    <OrdersStack.Navigator
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
      <OrdersStack.Screen name={Routes.Orders} component={OrdersScreen} />
    </OrdersStack.Navigator>
  )
}

export default OrdersStackScreen
