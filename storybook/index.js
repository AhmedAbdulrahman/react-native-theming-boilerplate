import React from 'react'
import { getStorybookUI, configure, addDecorator, addParameters } from '@storybook/react-native'
import { withKnobs } from '@storybook/addon-knobs'
import { ThemeProvider } from 'styled-components'
import { create } from '@storybook/theming'
import theme from 'styles/theme/light'
import { loadStories } from './storyLoader'

export const storyTheme = create({
  base: 'light',
  brandTitle: 'Food APP - Design System',
})

addParameters({
  options: {
    theme: storyTheme,
    storySort: (a, b) => {
      if (a[1].kind === b[1].kind) {
        return 0
      }

      return a[1].id.localeCompare(b[1].id, { numeric: true })
    },
  },
})

addDecorator(withKnobs)

addDecorator((storyFn) => {
  // Register story knobs before global knobs.
  const story = storyFn()

  return <ThemeProvider theme={theme}>{story}</ThemeProvider>
})

// import stories
configure(() => {
  loadStories()
}, module)

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({
  asyncStorage: null,
})

export default StorybookUIRoot
