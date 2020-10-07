import * as React from 'react'
import { Switch } from 'react-native'
import styled from 'styled-components'
import Typography from 'components/Typography'
import ListItem from 'components/ListItem'
import Spacing from 'components/Spacing'
import Button from 'components/Button'

const Container = styled.View((props) => ({
  backgroundColor: props.theme.palette.background.paper.string(),
  flex: 1,
  padding: props.theme.spacing(2),
}))

const LogoutButton = styled(Button)(() => ({
  marginTop: 'auto',
}))

const ProfileSettings = () => {
  const [values, setValues] = React.useState({ email: false, sms: false })

  function handleChange(name) {
    // eslint-disable-next-line func-names
    return function(value) {
      setValues((oldValues) => ({ ...oldValues, [name]: value }))
    }
  }

  function handleLogout() {
    // call logout handler
  }

  return (
    <Container>
      <Spacing mb={2}>
        <Typography variant="subtitle1">kontakt</Typography>
        <Typography>
          var säker på att du alltid får exklusiv inspiration och personliga meddelanden där du vill
          ha dem
        </Typography>
      </Spacing>
      <ListItem disableGutters divider>
        <Typography>jag vill ha erbjudanden via e-mail</Typography>
        <Switch value={values.email} onValueChange={handleChange('email')} />
      </ListItem>
      <ListItem disableGutters divider>
        <Typography>jag vill ha erbjudanden via sms</Typography>
        <Switch value={values.sms} onValueChange={handleChange('sms')} />
      </ListItem>
      <LogoutButton onPress={handleLogout} size="large" fullWidth>
        Logga ut
      </LogoutButton>
    </Container>
  )
}

export default ProfileSettings
