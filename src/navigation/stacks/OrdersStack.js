import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import OrdersScreen from 'screens/Member/Orders'
import OrderDetailsScreen from 'screens/Member/OrderDetails'
import { Routes } from 'navigation/Routes'

const OrdersStack = createStackNavigator()

const OrdersStackScreen = () => {
  return (
    <OrdersStack.Navigator headerMode="none">
      <OrdersStack.Screen name={Routes.Orders} component={OrdersScreen} />
      <OrdersStack.Screen
        name={Routes.OrderDetails}
        options={{
          headerTitle: 'Order number 10000',
          headerBackTitleVisible: false,
        }}
        component={OrderDetailsScreen}
      />
    </OrdersStack.Navigator>
  )
}

export default OrdersStackScreen
