import * as React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Animated from 'react-native-reanimated'
import mergeRefs from 'react-merge-refs'
import TextFieldLabel from './partials/TextFieldLabel'
import TextFieldUnderline from './partials/TextFieldUnderline'
import TextFieldHelperText from './partials/TextFieldHelperText'

const Root = styled.View({})
const Box = styled.View({
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',
})

const Adornment = styled.View((props) => ({
  position: 'absolute',
  // right: props.theme.spacing(2),
  // paddingBottom: props.theme.spacing(),
  zIndex: 1,
  ...(props.start && { marginLeft: props.theme.spacing() / 0.6 }),
  ...(props.end && { marginRight: props.theme.spacing() / 0.6 }),
  // ...(props.end && { marginLeft: props.theme.spacing() / 2 }),
}))

const InputContainer = styled.View((props) => ({
  flexDirection: 'row',
  alignItems: 'flex-end',
  ...(props.fullWidth && { width: '100%' }),
}))

const Input = styled.TextInput((props) => ({
  ...props.theme.typography.body1,
  color: props.theme.palette.text.primary.rgb().string(),
  flex: 1,
  margin: 0,

  // lineHeight: '16px',
  padding: props.theme.spacing(0, 1, 1, 0),
  ...(props.label && {
    paddingTop: props.theme.spacing(2),
  }),
  textAlignVertical: 'top',
  includeFontPadding: 'false',

  ...(props.variant === 'outlined' && {
    padding: props.theme.spacing(1.8),

    borderWidth: 2,
    borderRadius: props.theme.spacing(0.8),

    borderColor:
      props.theme.palette.type === 'dark'
        ? props.theme.palette.common.white.fade(0.95)
        : props.theme.palette.common.black.fade(0.94),
    backgroundColor:
      props.theme.palette.type === 'dark' ? '#151515' : props.theme.palette.common.black.fade(0.98),

    ...(props.startAdornment && {
      paddingLeft: props.theme.spacing(5),
    }),

    ...(props.endAdornment && {
      paddingRight: props.theme.spacing(5),
    }),
  }),
}))

const TextField = React.forwardRef(function TextField(props, ref) {
  const {
    label,
    variant,
    defaultValue,
    onFocus,
    onBlur,
    onClear,
    onChangeText,
    clearTextOnFocus,
    helperText,
    error,
    startAdornment,
    endAdornment,
    underline = true,
    disabled = false,
    editable = true,
    fullWidth,
    placeholder,
    UnderlineProps,
    LabelProps,
    HelperTextProps,
    value,
    style,
    ...other
  } = props
  const inputRef = React.useRef()

  const focusAnimatedValue = React.useRef(new Animated.Value(0))
  const labelAnimatedValue = React.useRef(
    new Animated.Value(defaultValue || placeholder || value || Boolean(startAdornment) ? 1 : 0),
  )

  const handleClear = React.useCallback(() => {
    if (onClear) {
      onClear()
    }
    inputRef?.current?.clear()
  }, [onClear])

  const handleFocus = React.useCallback(
    (e) => {
      if (onFocus) {
        onFocus(e)
      }

      if (clearTextOnFocus) {
        handleClear()
      }

      focusAnimatedValue.current.setValue(1)
      labelAnimatedValue.current.setValue(1)
      inputRef?.current?.focus()
    },
    [clearTextOnFocus, focusAnimatedValue, handleClear, labelAnimatedValue, onFocus],
  )

  const handleBlur = React.useCallback(
    (e) => {
      if (onBlur) {
        onBlur(e)
      }

      focusAnimatedValue.current.setValue(error ? 1 : 0)
      labelAnimatedValue.current.setValue(value || placeholder || Boolean(startAdornment) ? 1 : 0)
      inputRef?.current?.blur()
    },
    [error, onBlur, placeholder, startAdornment, value],
  )

  const handleChangeText = React.useCallback(
    (t) => {
      if (onChangeText) {
        onChangeText(t)
      }
    },
    [onChangeText],
  )

  return (
    <Root style={style} pointerEvents={!disabled && editable ? 'auto' : 'none'}>
      <InputContainer fullWidth>
        {underline && !variant && (
          <TextFieldUnderline
            focused={focusAnimatedValue.current}
            disabled={disabled}
            error={error}
            label={label}
            {...UnderlineProps}
          />
        )}

        {label && (
          <TextFieldLabel
            focused={labelAnimatedValue.current}
            disabled={disabled}
            error={error}
            fullWidth={fullWidth}
            {...LabelProps}
          >
            {label}
          </TextFieldLabel>
        )}
        <Box>
          {startAdornment && (
            <Adornment pointerEvents="none" start>
              {startAdornment}
            </Adornment>
          )}
          <Input
            ref={mergeRefs([inputRef, ref])}
            editable={!disabled && editable}
            disabled={disabled}
            value={value}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChangeText={handleChangeText}
            defaultValue={defaultValue}
            placeholder={placeholder}
            fullWidth={fullWidth}
            variant={variant}
            label={label}
            startAdornment={Boolean(startAdornment)}
            endAdornment={Boolean(endAdornment)}
            {...other}
          />
          {endAdornment && (
            <Adornment pointerEvents="none" end>
              {endAdornment}
            </Adornment>
          )}
        </Box>
      </InputContainer>

      {helperText && (
        <TextFieldHelperText error={error} disabled={disabled} {...HelperTextProps}>
          {helperText}
        </TextFieldHelperText>
      )}
    </Root>
  )
})

TextField.propTypes = {
  clearTextOnFocus: PropTypes.bool,
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  editable: PropTypes.bool,
  endAdornment: PropTypes.node,
  error: PropTypes.bool,
  fullWidth: PropTypes.bool,
  helperText: PropTypes.node,
  HelperTextProps: PropTypes.object,
  label: PropTypes.node,
  LabelProps: PropTypes.object,
  onBlur: PropTypes.func,
  onChangeText: PropTypes.func,
  onClear: PropTypes.func,
  onFocus: PropTypes.func,
  placeholder: PropTypes.string,
  startAdornment: PropTypes.node,
  style: PropTypes.object,
  underline: PropTypes.bool,
  UnderlineProps: PropTypes.object,
  value: PropTypes.string,
  variant: PropTypes.string,
}
export default React.memo(TextField)
