import * as React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const TypographyColor = {
  erro: 'error',
  grey: 'grey',
  primary: 'primary',
  secondary: 'secondary',
  success: 'success',
  textPrimary: 'textPrimary',
  textSecondary: 'textSecondary',
  textWhite: 'textWhite',
}

function getColor(color, palette) {
  switch (color) {
    case TypographyColor.primary:
      return palette.primary.main
    case TypographyColor.secondary:
      return palette.secondary.main
    case TypographyColor.success:
      return palette.success.main
    case TypographyColor.grey:
      return palette.text.disabled
    case TypographyColor.textPrimary:
      return palette.text.primary
    case TypographyColor.textSecondary:
      return palette.text.secondary
    case TypographyColor.error:
      return palette.error.main
    case TypographyColor.textWhite:
      return palette.common.white
    default:
      return palette.text.primary
  }
}

const Text = styled.Text((props) => {
  const {
    theme,
    color,
    align = 'auto',
    variant: variantProp = 'body1',
    paragraph = false,
    gutterBottom = false,
    gutterTop = false,
    underline = false,
  } = props

  const variant = theme.typography[variantProp]

  let marginBottom
  let marginTop

  if (gutterBottom) {
    marginBottom = variant.fontSize * 0.35
  }
  if (gutterTop) {
    marginTop = variant.fontSize * 0.35
  }
  if (paragraph) {
    marginBottom = theme.spacing(2)
  }

  return {
    margin: 0,
    color:
      color &&
      getColor(color, theme.palette)
        .rgb()
        .string(),
    textAlign: align,
    marginBottom,
    marginTop,
    ...(underline && { textDecorationLine: 'underline' }),
    ...variant,
  }
})

const Typography = React.forwardRef(function Typography(props, ref) {
  const { children, ...other } = props
  return (
    <Text ref={ref} {...other}>
      {children}
    </Text>
  )
})

Typography.propTypes = {
  children: PropTypes.node,
}

Typography.displayName = 'Typography'

export default React.memo(Typography)
