import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useTheme } from 'styled-components'
import { TabRoutes } from 'navigation/Routes'
import { HomeStack, ProfileStack, ShopStack, OrdersStack } from '../stacks'
import TabBarIcon from './partials/TabBarIcon'

export const Tab = createBottomTabNavigator()

const TabNavigation = (props) => {
  const theme = useTheme()
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: theme.palette.success.main.string(),
        inactiveTintColor: 'gray',
        style: {
          paddingHorizontal: theme.spacing(4),
          height: 85,
          backgroundColor: theme.palette.background.default.string(),
        },
        labelStyle: {
          fontSize: 12,
        },
      }}
      {...props}
    >
      <Tab.Screen
        key={TabRoutes.Home}
        name={TabRoutes.Home}
        component={HomeStack}
        options={{
          tabBarIcon: (tabBarIconProps) => <TabBarIcon icon="Food" {...tabBarIconProps} />,
          tabBarLabel: 'Hadeel',
        }}
      />
      <Tab.Screen
        key={TabRoutes.Search}
        name={TabRoutes.Search}
        component={ShopStack}
        options={{
          tabBarIcon: (tabBarIconProps) => <TabBarIcon icon="Search" {...tabBarIconProps} />,
        }}
      />
      <Tab.Screen
        key={TabRoutes.Orders}
        name={TabRoutes.Orders}
        component={OrdersStack}
        options={{
          tabBarIcon: (tabBarIconProps) => <TabBarIcon icon="Order" {...tabBarIconProps} />,
          tabBarLabel: 'Order',
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        key={TabRoutes.Profile}
        name={TabRoutes.Profile}
        component={ProfileStack}
        options={{
          tabBarIcon: (tabBarIconProps) => <TabBarIcon icon="Profile" {...tabBarIconProps} />,
        }}
      />
    </Tab.Navigator>
  )
}

export default TabNavigation
