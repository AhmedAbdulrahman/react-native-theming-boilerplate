import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useTheme } from 'styled-components'
import { TabRoutes } from 'navigation/Routes'
import TabBarIcon from './partials/TabBarIcon'
import HomeStack from './HomeStack'
import ProfileStack from './ProfileStack'
import ShopStack from './ShopStack'
import OrdersStack from './OrdersStack'
import AuthenticationStack from './AuthenticationStack'

const AppStack = createStackNavigator()
const Tab = createBottomTabNavigator()

const AppStackScreen = () => {
  const theme = useTheme()
  return (
    <AppStack.Navigator headerMode="none">
      <AppStack.Screen name="Authentication" component={AuthenticationStack} />
      <AppStack.Screen name="Home">
        {() => (
          <Tab.Navigator
            tabBarOptions={{
              activeTintColor: theme.palette.success.main.string(),
              inactiveTintColor: theme.palette.text.disabled.string(),
              style: {
                paddingHorizontal: theme.spacing(4),
                height: 85,
                backgroundColor: theme.palette.background.default.string(),
              },
              labelStyle: {
                fontSize: 12,
              },
            }}
          >
            <Tab.Screen
              key={TabRoutes.Home}
              name={TabRoutes.Home}
              component={HomeStack}
              options={{
                tabBarIcon: (tabBarIconProps) => <TabBarIcon icon="Food" {...tabBarIconProps} />,
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
        )}
      </AppStack.Screen>
    </AppStack.Navigator>
  )
}

export default AppStackScreen
