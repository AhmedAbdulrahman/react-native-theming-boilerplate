import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import { useApp } from 'containers/App/AppContext'
import lighTheme from 'styles/theme/light'
import darkTheme from 'styles/theme/dark'
import AssetsLoader from './AssetsLoader'
import fonts from './fonts'

function LoadAssets(props) {
  const { children } = props
  const { currentTheme } = useApp()

  const theme = currentTheme === 'light' ? lighTheme : darkTheme

  return (
    <ThemeProvider {...{ theme }}>
      <AssetsLoader {...{ fonts, theme }}>{children}</AssetsLoader>
    </ThemeProvider>
  )
}

LoadAssets.propTypes = {
  children: PropTypes.node,
  theme: PropTypes.object,
}
export default React.memo(LoadAssets)
