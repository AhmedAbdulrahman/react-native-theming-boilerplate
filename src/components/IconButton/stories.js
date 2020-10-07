import * as React from 'react'
import styled from 'styled-components'
import { boolean, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react-native'
import IconButton from './IconButton'

const stories = storiesOf('Components/IconButton', module)

const Box = styled.View((props) => ({
  margin: props.theme.spacing(),
  border: `1px solid ${props.theme.palette.primary.main}`,
}))

const IconButtonStory = () => {
  const props = {
    disabled: boolean('disabled', false),
    onPress: action('onPress'),
    icon: select('icon', ['Profile'], 'Profile'),
    color: select('color', ['primary', 'secondary', 'default'], 'default'),
  }

  return (
    <Box>
      <IconButton {...props} />
    </Box>
  )
}

stories.add('Default', IconButtonStory)
