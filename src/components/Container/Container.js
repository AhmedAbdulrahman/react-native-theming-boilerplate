/* eslint-disable react-native/no-inline-styles */
import * as React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Root = styled.View((props) => {
  const { flex, theme } = props
  return {
    ...theme.mixins.container,
    ...(flex && { flex: 1 }),
    backgroundColor: theme.palette.background.default.string(),
  }
})

const Container = (props) => {
  const { children, ...other } = props
  return <Root {...other}>{children}</Root>
}

Container.propTypes = {
  children: PropTypes.node,
}

export default Container
