import * as React from 'react'
import { ScrollView } from 'react-native'
import styled from 'styled-components'
import Media from 'components/Media'
import ListItemLink from 'components/ListItemLink'
import Typography from 'components/Typography'
import Container from 'components/Container'
import Badge from 'components/Badge'
import { Routes } from 'navigation/Routes'
import SvgIcon from 'components/SvgIcon'

const HeaderMedia = styled(Media)(() => ({
  height: 250,
}))

const Profile = () => (
  // eslint-disable-next-line react-native/no-inline-styles
  <ScrollView contentContainerStyle={{ flex: 1 }}>
    <HeaderMedia uri={'https://placekitten.com/375/250'} />
    <Container>
      <ListItemLink disableGutters divider to={Routes.Orders}>
        <Badge badgeContent={1}>
          <Typography color="dark">Orders</Typography>
        </Badge>
        <SvgIcon icon="ChevronRight" color="black" />
      </ListItemLink>
      <ListItemLink disableGutters divider to={Routes.ProfileDetails}>
        <Typography color="dark">Profile</Typography>
        <SvgIcon icon="ChevronRight" color="black" />
      </ListItemLink>
    </Container>
  </ScrollView>
)

export default Profile
