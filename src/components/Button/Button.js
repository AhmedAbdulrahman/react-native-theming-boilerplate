import * as React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { RectButton } from 'react-native-gesture-handler'

const BaseButton = styled(RectButton)((props) => {
  const { theme, disabled, size, fullWidth, color, variant } = props
  const colors = {
    default: theme.palette.action.selected.string(),
    primary: theme.palette.primary.main.string(),
    secondary: theme.palette.secondary.main.string(),
    success: theme.palette.success.main.string(),
    info: theme.palette.info.main.string(),
    error: theme.palette.error.main.string(),
    disabled: theme.palette.action.disabledBackground.string(),
    dark: theme.palette.action.active.string(),
  }
  const variants = {
    contained: {
      default: { backgroundColor: colors.default },
      primary: { backgroundColor: colors.primary },
      secondary: { backgroundColor: colors.secondary },
      success: { backgroundColor: colors.success },
      info: { backgroundColor: colors.info },
      error: { backgroundColor: colors.error },
      dark: { backgroundColor: colors.dark },
    },
    outlined: {
      default: { borderColor: colors.default, borderWidth: 1 },
      primary: { borderColor: colors.primary, borderWidth: 1 },
      secondary: { borderColor: colors.secondary, borderWidth: 1 },
      success: { borderColor: colors.success, borderWidth: 1 },
      info: { borderColor: colors.info, borderWidth: 1 },
      error: { borderColor: colors.error, borderWidth: 1 },
      dark: { borderColor: colors.dark, borderWidth: 1 },
    },
    text: {
      default: {},
      primary: {},
      secondary: {},
    },
  }
  const paddings = {
    small: { paddingVertical: 4, paddingHorizontal: 12 },
    medium: { paddingVertical: 6, paddingHorizontal: 16 },
    large: { paddingVertical: 16, paddingHorizontal: 28 },
  }

  return {
    ...variants[variant][color],
    ...(disabled && variant === 'contained' && { backgroundColor: colors.disabled }),
    ...(disabled && variant === 'outlined' && { borderColor: colors.disabled }),
    ...(fullWidth && { width: '100%' }),
    minWidth: 64,
    ...paddings[size],
    display: 'flex',
    alignSelf: fullWidth ? 'auto' : 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: theme.spacing(0.4),
  }
})

const Text = styled.Text((props) => {
  const { theme, size, color, variant, disabled, disableUppercase } = props
  const variants = {
    contained: {
      default: {
        color: theme.palette.grey[700].string(),
      },
      primary: {
        color: theme.palette.primary.contrastText.string(),
      },
      secondary: {
        color: theme.palette.primary.contrastText.string(),
      },
      info: {
        color: theme.palette.common.white.string(),
      },
      success: {
        color: theme.palette.common.white.string(),
      },
      error: {
        color: theme.palette.common.white.string(),
      },
      dark: {
        color: theme.palette.getContrastText(theme.palette.action.active),
      },
    },
    outlined: {
      default: { color: theme.palette.text.primary.string() },
      primary: { color: theme.palette.primary.main.string() },
      secondary: { color: theme.palette.secondary.main.string() },
      info: { color: theme.palette.info.main.string() },
      success: { color: theme.palette.success.main.string() },
      error: { color: theme.palette.error.main.string() },
    },
    text: {
      default: { color: theme.palette.text.primary.string() },
      primary: { color: theme.palette.primary.light.string() },
      secondary: { color: theme.palette.secondary.light.string() },
      success: { color: theme.palette.success.light.string() },
    },
  }
  const fontSizes = {
    small: 12,
    medium: theme.typography.button.fontSize,
    large: theme.typography.button.fontSize,
  }

  return {
    ...variants[variant][color],
    ...(disabled && { color: theme.palette.action.disabled.string() }),
    ...theme.typography.button,
    ...(disableUppercase && { textTransform: 'none' }),
    fontSize: fontSizes[size],
    lineHeight: `${fontSizes[size] * 1.25}px`,
  }
})

const Button = React.forwardRef(function Button(props, ref) {
  const {
    children: childrenProp,
    color = 'default',
    size = 'medium',
    variant = 'contained',
    component = RectButton,
    disabled = false,
    disableUppercase = false,
    ...other
  } = props

  // wrap children with Text if necessary
  const children = React.Children.map(childrenProp, (child) => {
    return typeof child === 'string' ? (
      <Text
        color={color}
        size={size}
        variant={variant}
        disabled={disabled}
        disableUppercase={disableUppercase}
      >
        {child}
      </Text>
    ) : (
      child
    )
  })

  return (
    <BaseButton
      ref={ref}
      as={component}
      color={color}
      size={size}
      variant={variant}
      disabled={disabled}
      {...other}
    >
      {children}
    </BaseButton>
  )
})

Button.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  size: PropTypes.string,
  variant: PropTypes.string,
  component: PropTypes.element,
  disabled: PropTypes.bool,
  disableUppercase: PropTypes.bool,
}

export default Button
