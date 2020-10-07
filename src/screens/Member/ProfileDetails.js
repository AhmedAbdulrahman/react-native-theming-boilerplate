import * as React from 'react'
import styled from 'styled-components'
import { ScrollView } from 'react-native'
import Media from 'components/Media'
import Typography from 'components/Typography'
import TextField from 'components/TextField'
import Button from 'components/Button'
import Spacing from 'components/Spacing'

const initialProfileState = {
  personalNumber: '',
  firstName: 'Ahmed',
  lastName: 'Abdulrahman',
  address: 'Stockholm',
  co: '',
  postalCode: '1234',
  city: 'Stockholm',
  country: 'Sweden',
  email: 'john@email.com',
  phone: '0806588800',
}

const HeaderMedia = styled(Media)(() => ({
  height: 250,
}))

const Container = styled.View((props) => ({
  backgroundColor: props.theme.palette.background.paper.string(),
  flex: 1,
  padding: props.theme.spacing(2),
}))

const MemberNumberContainer = styled.View((props) => ({
  backgroundColor: props.theme.palette.secondary.main.string(),
  padding: props.theme.spacing(2),
}))

const ProfileDetails = () => {
  const [values, setValues] = React.useState(initialProfileState)

  function handleSubmit() {}

  function handleChange(name) {
    // eslint-disable-next-line func-names
    return function(value) {
      setValues((oldValues) => ({ ...oldValues, [name]: value }))
    }
  }

  return (
    <ScrollView>
      <HeaderMedia uri={'https://placekitten.com/375/250'} />
      {/* <MemberNumberContainer>
        <Typography variant="caption">medlemsnummer</Typography>
        <Typography variant="body2">012345</Typography>
      </MemberNumberContainer> */}
      <Container>
        <Spacing mt={2}>
          <TextField
            label="E-mail"
            value={values.email}
            fullWidth
            onChangeText={handleChange('email')}
          />
          <TextField
            label="Phone"
            value={values.phone}
            fullWidth
            onChangeText={handleChange('phone')}
          />
          <TextField
            label="First Name"
            autoCompleteType="name"
            value={values.firstName}
            onChangeText={handleChange('firstName')}
          />
          <TextField
            label="Last Name"
            autoCompleteType="name"
            value={values.lastName}
            onChangeText={handleChange('lastName')}
          />
          <TextField
            label="Streed Address"
            autoCompleteType="street-address"
            value={values.address}
            onChangeText={handleChange('address')}
          />
          <TextField
            label="Post"
            autoCompleteType="postal-code"
            value={values.postalCode}
            onChangeText={handleChange('postalCode')}
          />
        </Spacing>
        <Spacing mt={5}>
          <Button size="large" color="success" fullWidth onPress={handleSubmit}>
            Update
          </Button>
        </Spacing>
      </Container>
    </ScrollView>
  )
}

export default ProfileDetails
