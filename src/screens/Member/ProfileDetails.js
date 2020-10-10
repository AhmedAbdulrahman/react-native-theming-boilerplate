import * as React from 'react'
import { ScrollView } from 'react-native'
import Container from 'components/Container'
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
    <Container top={2}>
      <ScrollView>
        <Spacing mt={3}>
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
      </ScrollView>
    </Container>
  )
}

export default ProfileDetails
