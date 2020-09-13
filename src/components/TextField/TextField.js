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
  alignItems: 'flex-end',
})

const Adornment = styled.View((props) => ({
  paddingBottom: props.theme.spacing(),
  ...(props.start && { marginRight: props.theme.spacing() / 2 }),
  ...(props.end && { marginLeft: props.theme.spacing() / 2 }),
}))

const InputContainer = styled.View((props) => ({
  flexDirection: 'row',
  alignItems: 'flex-end',
  ...(props.fullWidth && { width: '100%' }),
}))

const Input = styled.TextInput((props) => ({
  ...props.theme.typography.body1,
  flex: 1,
  margin: 0,
  lineHeight: '16px',
  padding: props.theme.spacing(2, 1, 1, 0),
  textAlignVertical: 'top',
  includeFontPadding: 'false',
  ...(props.variant === 'outlined' && {
    padding: props.theme.spacing(2),
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#F3F2F2',
    backgroundColor: '#FBFBFB',
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
            {...UnderlineProps}
          />
        )}

        {startAdornment && (
          <Adornment pointerEvents="none" start>
            {startAdornment}
          </Adornment>
        )}

        {label && (
          <TextFieldLabel
            focused={labelAnimatedValue.current}
            disabled={disabled}
            error={error}
            {...LabelProps}
          >
            {label}
          </TextFieldLabel>
        )}
        <Box>
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
            {...other}
          />
        </Box>

        {endAdornment && (
          <Adornment pointerEvents="none" end>
            {endAdornment}
          </Adornment>
        )}
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
  label: PropTypes.node,
  defaultValue: PropTypes.string,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onClear: PropTypes.func,
  onChangeText: PropTypes.func,
  clearTextOnFocus: PropTypes.bool,
  helperText: PropTypes.node,
  startAdornment: PropTypes.node,
  endAdornment: PropTypes.node,
  underline: PropTypes.bool,
  disabled: PropTypes.bool,
  editable: PropTypes.bool,
  placeholder: PropTypes.string,
  UnderlineProps: PropTypes.object,
  LabelProps: PropTypes.object,
  HelperTextProps: PropTypes.object,
  value: PropTypes.string,
  style: PropTypes.object,
}
export default React.memo(TextField)
