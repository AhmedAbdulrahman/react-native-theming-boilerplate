import * as React from 'react'
import PropTypes from 'prop-types'
import Flex from 'components/Flex'
import Typography from 'components/Typography'
import Button from 'components/Button'
import Spacing from 'components/Spacing'
import TextField from 'components/TextField'
import Container from 'components/Container'
import { Routes } from 'navigation/Routes'

const ForgetPassword = ({ navigation }) => {
  return (
    <Container>
      <Flex flex={0.44} justify="center">
        <Typography variant="h4" gutterBottom>
          Forgot password
        </Typography>
        <Spacing pr={8} mb={1}>
          <Typography variant="body1" color="grey">
            Enter your email address and we will send you a reset instructions.
          </Typography>
        </Spacing>
        <Spacing mt={2}>
          <TextField placeholder="Enter your email" variant="outlined" fullWidth />
        </Spacing>
        <Spacing mt={2}>
          <Button
            size="large"
            fullWidth
            color="success"
            onPress={() => navigation.navigate(Routes.SignIn)}
          >
            Reset Password
          </Button>
        </Spacing>
      </Flex>
    </Container>
  )
}

ForgetPassword.propTypes = {
  navigation: PropTypes.object,
}

export default ForgetPassword
