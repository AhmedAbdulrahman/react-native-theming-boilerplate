import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme/light'

export default function StyledThemeDecorator(storyFn) {
  return <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
}
