import * as React from 'react'
import Flex from 'components/Flex'
import Typography from 'components/Typography'
import Button from 'components/Button'
import Link from 'navigation/Link'
import Spacing from 'components/Spacing'
import TextField from 'components/TextField'
import Container from 'components/Container'
import { Routes } from 'navigation/Routes'

const SignUp = () => {
  return (
    <Container>
      <Flex flex={0.9} justify="center">
        <Typography variant="h4" gutterBottom>
          Create Account
        </Typography>
        <Spacing pr={5} mb={1}>
          <Typography variant="body1" color="grey">
            Enter your Name, Email and Password fro SignUp.{' '}
            <Link to={`SignIn`} params={{ block: `Onboarding` }} variant="body2" color="success">
              Already have an account?{' '}
            </Link>
          </Typography>
        </Spacing>
        <Spacing mt={2}>
          <TextField placeholder="Full Name" variant="outlined" fullWidth />
          <TextField placeholder="Email Address" variant="outlined" fullWidth />
          <TextField placeholder="Password" variant="outlined" secureTextEntry fullWidth />
        </Spacing>
        <Spacing mt={2}>
          <Button size="large" fullWidth color="success">
            Sign Up
          </Button>
          <Typography variant="body1" color="grey" align="center">
            By Signing up you agree to our{' '}
            <Link to={Routes.Welcome} variant="body2" color="success">
              Terms
            </Link>{' '}
            and{' '}
            <Link to={Routes.Welcome} variant="body2" color="success">
              Conditions & Privicy Policy
            </Link>
          </Typography>
          <Typography variant="body1" color="grey" align="center">
            Or
          </Typography>
          <Button size="large" fullWidth color="success">
            Connect with Facebook
          </Button>
          <Button size="large" fullWidth color="secondary">
            Connect with Google
          </Button>
        </Spacing>
      </Flex>
    </Container>
  )
}

export default SignUp
