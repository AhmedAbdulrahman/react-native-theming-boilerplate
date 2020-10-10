/* eslint-disable react-native/no-inline-styles */
import * as React from 'react'
import PropTypes from 'prop-types'
import styled, { useTheme } from 'styled-components'
import { SafeAreaView } from 'react-native-safe-area-context'

const Root = styled.View((props) => ({
  ...props.theme.mixins.container,
  flex: 1,
  backgroundColor: props.theme.palette.background.default.string(),
}))

const Container = (props) => {
  const { children, right = 'right', left = 'left', top = 'top', ...other } = props
  const theme = useTheme()
  return (
    <SafeAreaView
      edges={[right, left, top]}
      style={{
        flex: 1,
        backgroundColor: theme.palette.background.default.string(),
      }}
    >
      <Root {...other}>{children}</Root>
    </SafeAreaView>
  )
}

Container.propTypes = {
  children: PropTypes.node,
  right: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  left: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  top: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}
export default Container
