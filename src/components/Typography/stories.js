import * as React from 'react'
import { storiesOf } from '@storybook/react-native'
import { select, boolean } from '@storybook/addon-knobs'
import Typography from 'components/Typography'
import Flex from 'components/Flex'

const stories = storiesOf('Common/Typography', module)

const TypographyStory = () => {
  const TypographyProps = {
    color: select('color', ['primary', 'secondary', 'textPrimary', 'textSecondary'], undefined),
    align: select('align', ['left', 'right', 'center', 'justify'], undefined),
    gutterBottom: boolean('gutterBottom', false),
    paragraph: boolean('paragraph', false),
  }

  return (
    <Flex flex={1} justify="center" align="center">
      <Typography {...TypographyProps} variant="h1">
        h1. Heading
      </Typography>
      <Typography {...TypographyProps} variant="h2">
        h2. Heading
      </Typography>
      <Typography {...TypographyProps} variant="h3">
        h3. Heading h3
      </Typography>
      <Typography {...TypographyProps} variant="h4">
        h4. Heading h4
      </Typography>
      <Typography {...TypographyProps} variant="h5">
        h5. Heading h5
      </Typography>
      <Typography {...TypographyProps} variant="h6">
        h6. Heading h6
      </Typography>
      <Typography {...TypographyProps} variant="subtitle1">
        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
      </Typography>
      <Typography {...TypographyProps} variant="subtitle2">
        subtitle3. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
      </Typography>
      <Typography {...TypographyProps} variant="body1">
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Typography {...TypographyProps} variant="body2">
        body3. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Typography {...TypographyProps} variant="button">
        BUTTON TEXT
      </Typography>
      <Typography {...TypographyProps} variant="caption">
        Caption text
      </Typography>
      <Typography {...TypographyProps} variant="overline">
        OVERLINE TEXT
      </Typography>
    </Flex>
  )
}

stories.add('Default', TypographyStory)
