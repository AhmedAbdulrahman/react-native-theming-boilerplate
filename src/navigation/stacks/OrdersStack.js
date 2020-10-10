import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import OrdersScreen from 'screens/Member/Orders'
import { Routes } from 'navigation/Routes'

const OrdersStack = createStackNavigator()

const OrdersStackScreen = () => {
  return (
    <OrdersStack.Navigator headerMode="none">
      <OrdersStack.Screen name={Routes.Orders} component={OrdersScreen} />
    </OrdersStack.Navigator>
  )
}

export default OrdersStackScreen
