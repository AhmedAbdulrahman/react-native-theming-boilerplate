import * as React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react-native'
import Media from './Media'

const stories = storiesOf('Components/Media', module)

const Box = styled.View((props) => ({
  margin: props.theme.spacing(),
  border: `2px solid ${props.theme.palette.primary.main}`,
  flex: 1,
}))

const MediaStory = () => {
  const props = {
    uri: 'https://source.unsplash.com/random/500x500?meal',
    style: { aspectRatio: 2 / 3 },
  }

  return (
    <Box>
      <Media {...props} resizeMode="cover" />
    </Box>
  )
}

stories.add('Default', MediaStory)
