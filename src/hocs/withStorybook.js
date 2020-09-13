import React from 'react'
import { ThemeProvider } from 'styled-components'
import AppProvider from 'containers/App'
import { LoadAssets } from 'assets'
import Button from 'components/Button'
import Flex from 'components/Flex'
import theme from 'styles/theme/light'
import Storybook from '../../storybook'

const withStorybook = (Wrapped) => {
  const WithStorybook = (props) => {
    const [storybook, setStorybook] = React.useState()
    if (storybook === undefined) {
      return (
        <ThemeProvider {...{ theme }}>
          <AppProvider>
            <LoadAssets theme={theme}>
              <Flex flexDirection="row">
                <Flex justify="center" align="center">
                  <Button
                    size="medium"
                    color="primary"
                    onPress={() => {
                      // eslint-disable-next-line no-console
                      console.disableYellowBox = true
                      setStorybook(true)
                    }}
                  >
                    Design System
                  </Button>
                </Flex>
                <Flex justify="center" align="center">
                  <Button
                    size="medium"
                    color="secondary"
                    onPress={() => {
                      setStorybook(false)
                    }}
                  >
                    Run Application
                  </Button>
                </Flex>
              </Flex>
            </LoadAssets>
          </AppProvider>
        </ThemeProvider>
      )
    }

    if (storybook) {
      return <Storybook />
    }
    return <Wrapped {...props} />
  }

  return WithStorybook
}

export default withStorybook
