import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import styled, { useTheme } from 'styled-components'
import ProfileScreen from 'screens/Member/Profile'
import ProfileDetailsScreen from 'screens/Member/ProfileDetails'
import ProfileSettingsScreen from 'screens/Member/ProfileSettings'
import OrdersScreen from 'screens/Member/Orders'
import { Routes } from 'navigation/Routes'
import IconButton, { Container } from 'components/IconButton'
import SvgIcon from 'components/SvgIcon'
import Link from 'navigation/Link'

const ProfileStack = createStackNavigator()

const HeaderButton = styled(Link)((props) => ({
  margin: props.theme.spacing(2),
}))

const ProfileStackScreen = () => {
  const theme = useTheme()

  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerTitleStyle: {
          color: theme.palette.text.primary.rgb().string(),
        },
        headerStyle: {
          backgroundColor: theme.palette.background.default.rgb().string(),
          borderBottomWidth: 0,
        },
        headerTintColor: 'white',
        headerBackImage: () => (
          <Container>
            <SvgIcon icon="ChevronLeft" color={theme.palette.text.primary.rgb().string()} />
          </Container>
        ),
      }}
    >
      <ProfileStack.Screen
        name={Routes.Profile}
        options={{ headerShown: false }}
        component={ProfileScreen}
      />
      <ProfileStack.Screen
        name={Routes.ProfileDetails}
        options={{
          headerTitle: 'Profile Settings',
          headerBackTitleVisible: false,
          headerRight: () => (
            <HeaderButton component={IconButton} icon="Settings" to={Routes.ProfileSettings} />
          ),
        }}
        component={ProfileDetailsScreen}
      />
      <ProfileStack.Screen
        name={Routes.ProfileSettings}
        options={{
          headerTitle: 'Setttings',
          headerBackTitleVisible: false,
        }}
        component={ProfileSettingsScreen}
      />
      <ProfileStack.Screen
        name={Routes.Orders}
        options={{
          headerShown: false,
          headerBackTitleVisible: false,
        }}
        component={OrdersScreen}
      />
    </ProfileStack.Navigator>
  )
}

export default ProfileStackScreen
