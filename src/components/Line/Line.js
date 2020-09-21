import * as React from 'react'
import styled from 'styled-components'

const Root = styled.View((props) => {
  const { theme, color, size } = props

  const colors = {
    primary: theme.palette.primary.main.string(),
    secondary: theme.palette.secondary.main.string(),
    success: theme.palette.success.main.string(),
    info: theme.palette.info.main.string(),
    error: theme.palette.error.main.string(),
    disabled: theme.palette.action.disabledBackground.string(),
  }
  const sizes = {
    small: 1,
    medium: 1.5,
    large: 2.5,
  }
  return {
    marginVertical: theme.spacing(),
    borderWidth: sizes[size],
    borderColor: colors[color],
  }
})

const Line = (props) => {
  const { color = 'disabled', size = 'small', ...other } = props
  return <Root color={color} size={size} {...other} />
}

export default Line
