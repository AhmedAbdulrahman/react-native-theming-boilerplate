/* eslint-disable react-native/no-inline-styles */
import * as React from 'react'
import PropTypes from 'prop-types'
import { SafeAreaView as SafeAreaViewContext } from 'react-native-safe-area-context'
import styled from 'styled-components'

const StyledSafeAreaView = styled(SafeAreaViewContext)((props) => ({
  flex: 1,
  backgroundColor: props.transparent
    ? 'transparent'
    : props.theme.palette.background.default.string(),
}))

const SafeAreaView = ({ children, edges, ...other }) => {
  return (
    <StyledSafeAreaView edges={edges} {...other}>
      {children}
    </StyledSafeAreaView>
  )
}

SafeAreaView.propTypes = {
  children: PropTypes.node,
  edges: PropTypes.array,
}

SafeAreaView.defaultProps = {}

export default SafeAreaView
