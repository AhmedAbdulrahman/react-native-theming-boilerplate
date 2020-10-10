import * as React from 'react'
import { ScrollView, Switch } from 'react-native'
import { useTheme } from 'styled-components'
import { useApp, useAppHandlers } from 'containers/App/AppContext'
import ListItemLink from 'components/ListItemLink'
import ListItem from 'components/ListItem'
import Typography from 'components/Typography'
import Container from 'components/Container'
import { Routes } from 'navigation/Routes'
import SvgIcon from 'components/SvgIcon'
import Flex from 'components/Flex'
import Spacing from 'components/Spacing'

const Profile = () => {
  const { currentTheme } = useApp()
  const { onThemeToggle } = useAppHandlers()

  const [isEnabled, setIsEnabled] = React.useState(false)

  const theme = useTheme()
  return (
    <Container>
      <ScrollView contentContainerStyle={{ flexGrow: 0 }} showsVerticalScrollIndicator={false}>
        <Spacing mt={3} mr={4} mb={4}>
          <Flex>
            <Typography color="dark" variant="h4" paragraph>
              Account Settings
            </Typography>
            <Typography color="grey" variant="body1">
              Update your settings like notifications, payments, profile edit etc.
            </Typography>
          </Flex>
        </Spacing>
        <ListItemLink disableGutters divider to={Routes.ProfileDetails}>
          <Spacing mr={2}>
            <SvgIcon icon="Profile" color="grey" />
          </Spacing>
          <Flex>
            <Typography color="dark" variant="h7" gutterBottom>
              Profile Information
            </Typography>
            <Typography color="dark" variant="body2" gutterBottom>
              Change your account information
            </Typography>
          </Flex>
          <SvgIcon icon="ChevronRight" color={theme.palette.text.primary.rgb().string()} />
        </ListItemLink>
        <ListItemLink disableGutters divider to={Routes.ProfileDetails}>
          <Spacing mr={2}>
            <SvgIcon icon="Lock" color="grey" />
          </Spacing>
          <Flex>
            <Typography color="dark" variant="h7" gutterBottom>
              Change Password
            </Typography>
            <Typography color="dark" variant="body2" gutterBottom>
              Change your password
            </Typography>
          </Flex>
          <SvgIcon icon="ChevronRight" color={theme.palette.text.primary.rgb().string()} />
        </ListItemLink>
        <ListItemLink disableGutters divider to={Routes.ProfileDetails}>
          <Spacing mr={2}>
            <SvgIcon icon="Card" color="grey" />
          </Spacing>
          <Flex>
            <Typography color="dark" variant="h7" gutterBottom>
              Payment Methods
            </Typography>
            <Typography color="dark" variant="body2" gutterBottom>
              Add your credit {`&`} debit cards
            </Typography>
          </Flex>
          <SvgIcon icon="ChevronRight" color={theme.palette.text.primary.rgb().string()} />
        </ListItemLink>
        <ListItemLink disableGutters divider to={Routes.ProfileDetails}>
          <Spacing mr={2}>
            <SvgIcon icon="Marker" color="grey" />
          </Spacing>
          <Flex>
            <Typography color="dark" variant="h7" gutterBottom>
              Locations
            </Typography>
            <Typography color="dark" variant="body2" gutterBottom>
              Add or remove your delivery locations
            </Typography>
          </Flex>
          <SvgIcon icon="ChevronRight" color={theme.palette.text.primary.rgb().string()} />
        </ListItemLink>
        <ListItemLink disableGutters divider to={Routes.ProfileDetails}>
          <Spacing mr={2}>
            <SvgIcon icon="Facebook" color="grey" />
          </Spacing>
          <Flex>
            <Typography color="dark" variant="h7" gutterBottom>
              Add Social Account
            </Typography>
            <Typography color="dark" variant="body2" gutterBottom>
              Add Facebook, Twitter etc
            </Typography>
          </Flex>
          <SvgIcon icon="ChevronRight" color={theme.palette.text.primary.rgb().string()} />
        </ListItemLink>
        <ListItemLink disableGutters divider to={Routes.ProfileDetails}>
          <Spacing mr={2}>
            <SvgIcon icon="Share" color="grey" />
          </Spacing>
          <Flex>
            <Typography color="dark" variant="h7" gutterBottom>
              Refer to Friends
            </Typography>
            <Typography color="dark" variant="body2" gutterBottom>
              Get $10 for reffering friends
            </Typography>
          </Flex>
          <SvgIcon icon="ChevronRight" color={theme.palette.text.primary.rgb().string()} />
        </ListItemLink>

        <Spacing mt={5} mb={2}>
          <Flex>
            <Typography uppercase color="dark" variant="h6">
              Notifications
            </Typography>
          </Flex>
        </Spacing>

        <ListItem disableGutters divider>
          <Spacing mr={2}>
            <SvgIcon icon="Sun" color="grey" />
          </Spacing>
          <Flex>
            <Typography color="dark" variant="h7" gutterBottom>
              Dark Mode
            </Typography>
            <Typography color="dark" variant="body2" gutterBottom>
              Use darker theme to keep your eyes comfortable at night.
            </Typography>
          </Flex>
          <Switch
            trackColor={{ false: '#767577', true: '#f4f3f4' }}
            thumbColor={
              currentTheme === 'dark'
                ? theme.palette.success.main.string()
                : theme.palette.background.default.rgb().string()
            }
            onValueChange={() => {
              onThemeToggle()
              setIsEnabled(currentTheme === 'light')
            }}
            value={isEnabled}
          />
        </ListItem>

        <ListItem disableGutters divider>
          <Spacing mr={2}>
            <SvgIcon icon="Notify" color="grey" />
          </Spacing>
          <Flex>
            <Typography color="dark" variant="h7" gutterBottom>
              Push Notifications
            </Typography>
            <Typography color="dark" variant="body2" gutterBottom>
              For daily update you will get it
            </Typography>
          </Flex>
          <Switch
            trackColor={{ false: '#767577', true: '#f4f3f4' }}
            // thumbColor={currentTheme === 'dark' ? '#3e3e3e' : '#f4f3f4'}
            // ios_backgroundColor="#3e3e3e"
          />
        </ListItem>

        <Spacing mt={5} mb={2}>
          <Flex>
            <Typography color="dark" variant="h6" style={{ textTransform: 'uppercase' }}>
              More
            </Typography>
          </Flex>
        </Spacing>

        <ListItemLink disableGutters to={Routes.ProfileDetails}>
          <Spacing mr={2}>
            <SvgIcon icon="Book" color="grey" />
          </Spacing>
          <Flex>
            <Typography color="dark" variant="h7" gutterBottom>
              Rate Us
            </Typography>
            <Typography color="dark" variant="body2" gutterBottom>
              Rate us on AppStore
            </Typography>
          </Flex>
          <SvgIcon icon="ChevronRight" color={theme.palette.text.primary.rgb().string()} />
        </ListItemLink>

        <ListItemLink disableGutters to={Routes.ProfileDetails}>
          <Spacing mr={2}>
            <SvgIcon icon="Book" color="grey" />
          </Spacing>
          <Flex>
            <Typography color="dark" variant="h7" gutterBottom>
              FAQ
            </Typography>
            <Typography color="dark" variant="body2" gutterBottom>
              Frequently asked questions
            </Typography>
          </Flex>
          <SvgIcon icon="ChevronRight" color={theme.palette.text.primary.rgb().string()} />
        </ListItemLink>
        <ListItem disableGutters>
          <Spacing mr={2}>
            <SvgIcon icon="Lock" color="grey" />
          </Spacing>
          <Flex>
            <Typography color="dark" variant="h7" gutterBottom>
              Logout
            </Typography>
          </Flex>
        </ListItem>
      </ScrollView>
    </Container>
  )
}

export default Profile
