import * as React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react-native'
import StyledButton from 'components/Button'
import Flex from 'components/Flex'

const stories = storiesOf('Components/Button', module)

const Button = styled(StyledButton)((props) => ({
  margin: props.theme.spacing(),
}))

const ButtonStory = () => {
  return (
    <Flex flex={1} justify="center" align="center">
      <Button>No props</Button>
      <Button color="primary">Color primary</Button>
      <Button color="secondary">Color secondary</Button>
      <Button color="success">Color secondary</Button>
      <Button size="small">Size small</Button>
      <Button size="large">Size large</Button>
      <Button variant="outlined">Variant Outlined</Button>
      <Button variant="outlined" color="primary">
        Outlined primary
      </Button>
      <Button variant="outlined" color="secondary">
        Outlined secondary
      </Button>
      <Button variant="text" color="primary">
        Text Primary
      </Button>
      <Button fullWidth>Full width</Button>
      <Button disabled>Disabled</Button>
      <Button variant="outlined" disabled>
        Disabled outlined
      </Button>
    </Flex>
  )
}

stories.add('Default', ButtonStory)
