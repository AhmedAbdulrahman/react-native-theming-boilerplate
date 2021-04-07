/* eslint-disable react-native/no-inline-styles */
import * as React from 'react'
import PropTypes from 'prop-types'
import { SafeAreaView as SafeAreaViewContext } from 'react-native-safe-area-context'
import { useTheme } from 'styled-components'

const SafeAreaView = ({ children, edges, ...other }) => {
  const theme = useTheme()

  return (
    <SafeAreaViewContext
      edges={edges}
      style={{
        flex: 1,
        // justifyContent: 'space-between',
        // alignItems: 'center',
        backgroundColor: theme.palette.background.default.string(),
      }}
      {...other}
    >
      {children}
    </SafeAreaViewContext>
  )
}

SafeAreaView.propTypes = {
  children: PropTypes.node,
  edges: PropTypes.array,
}

SafeAreaView.defaultProps = {}

export default SafeAreaView
