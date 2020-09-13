import * as React from 'react'
import PropTypes from 'prop-types'
import Flex from 'components/Flex'
import Typography from 'components/Typography'
import Button from 'components/Button'
import Link from 'navigation/Link'
import Spacing from 'components/Spacing'
import TextField from 'components/TextField'
import Container from 'components/Container'
import { Routes } from 'navigation/Routes'

const SignIn = ({ navigation }) => {
  return (
    <Container>
      <Flex flex={0.8} justify="center">
        <Typography variant="h4" gutterBottom>
          Welcome to Foody
        </Typography>
        <Spacing pr={8} mb={1}>
          <Typography variant="body1" color="grey">
            Enter your Phone number or Email for sign in, Or{' '}
            <Link
              to={Routes.SignUp}
              params={{ block: Routes.SignUp }}
              variant="body2"
              color="success"
            >
              Create new account.
            </Link>
          </Typography>
        </Spacing>
        <Spacing mt={2}>
          <TextField placeholder="Enter your email" variant="outlined" fullWidth />
          <TextField placeholder="Enter Password" variant="outlined" secureTextEntry fullWidth />
        </Spacing>
        <Spacing mt={2}>
          <Link
            to={Routes.ForgotPassword}
            params={{ block: Routes.ForgotPassword }}
            variant="body2"
            color="grey"
            align="center"
          >
            Forget Password?
          </Link>
          <Button
            size="large"
            fullWidth
            color="success"
            onPress={() => navigation.navigate(Routes.Home)}
          >
            Sign In
          </Button>
          <Typography variant="body1" color="grey" align="center">
            Or
          </Typography>
          <Button size="large" fullWidth color="info">
            Connect with Facebook
          </Button>
          <Button size="large" fullWidth color="error">
            Connect with Google
          </Button>
        </Spacing>
      </Flex>
    </Container>
  )
}

SignIn.propTypes = {
  navigation: PropTypes.object,
}

export default SignIn
