import * as React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Typography from 'components/Typography'

const HelperText = styled(Typography)((props) => ({
  ...props.theme.typography.caption,
  margin: 0,
  marginTop: props.theme.spacing() / 2,
  backgroundColor: 'transparent',
  color: props.theme.palette.text.secondary.rgb().string(),

  ...(props.disabled && { color: props.theme.palette.action.disabled.rgb().string() }),
  ...(props.error && { color: props.theme.palette.error.main.rgb().string() }),
}))

const TextFieldHelperText = (props) => {
  const { children, disabled, error, ...other } = props

  return (
    <HelperText disabled={disabled} error={error} {...other}>
      {children}
    </HelperText>
  )
}

TextFieldHelperText.propTypes = {
  children: PropTypes.node,
  error: PropTypes.string,
  disabled: PropTypes.bool,
}

export default React.memo(TextFieldHelperText)
