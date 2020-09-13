import * as React from 'react'
import styled from 'styled-components'
import { text, boolean } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Typography from 'components/Typography'
import TextField from './TextField'

const stories = storiesOf('Components/TextField', module)

const Box = styled.View((props) => ({
  margin: props.theme.spacing(2, 1),
}))

stories.add('Default', () => {
  const props = {
    label: text('label', 'label'),
  }

  return (
    <ScrollView>
      <Box>
        <Typography variant="subtitle1" gutterBottom>
          Default
        </Typography>
        <TextField {...props} />
      </Box>

      <Box>
        <Typography variant="subtitle1" gutterBottom>
          Disabled
        </Typography>
        <TextField {...props} disabled />
      </Box>

      <Box>
        <Typography variant="subtitle1" gutterBottom>
          Error
        </Typography>
        <TextField {...props} helperText="helper text" error="Error Message" />
      </Box>

      <Box>
        <Typography variant="subtitle1" gutterBottom>
          Default Value
        </Typography>
        <TextField {...props} defaultValue="some content" />
      </Box>

      <Box>
        <Typography variant="subtitle1" gutterBottom>
          Placeholder
        </Typography>
        <TextField {...props} placeholder="placeholder" />
      </Box>
    </ScrollView>
  )
})
