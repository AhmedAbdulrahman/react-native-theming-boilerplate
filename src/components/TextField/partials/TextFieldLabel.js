import * as React from 'react'
import PropTypes from 'prop-types'
import styled, { useTheme } from 'styled-components'
import Animated from 'react-native-reanimated'
import { mix, mixColor, withSpringTransition } from 'react-native-redash/lib/module/v1'

const Root = styled(Animated.View)(() => ({
  position: 'absolute',
  top: 0,
  left: '-100%',
  width: '200%',
  paddingLeft: '50%',
}))

const Label = styled(Animated.Text)((props) => ({
  ...(props.fullWidth && { width: '100%' }),
  ...props.theme.typography.body1,
  textTransform: 'uppercase',
  textAlign: 'left',
}))

const TextFieldLabel = (props) => {
  const { children, focused, disabled = false, error = false, ...other } = props

  const theme = useTheme()

  const transition = withSpringTransition(focused, {
    damping: 12,
    mass: 0.2,
    restSpeedThreshold: 0.2,
    restDisplacementThreshold: 0.2,
  })
  const translateY = mix(transition, theme.spacing(2), -theme.spacing())
  const scale = mix(transition, 1, 0.75)

  const color = mixColor(
    transition,
    disabled
      ? theme.palette.text.disabled.rgb().string()
      : theme.palette.text.secondary.rgb().string(),
    theme.palette.text.disabled.rgb().string(),
  )

  return (
    <Root style={{ transform: [{ translateY }, { scale }] }} {...other}>
      <Label style={{ color: error ? theme.palette.error.main.rgb().string() : color }}>
        {children}
      </Label>
    </Root>
  )
}

TextFieldLabel.propTypes = {
  children: PropTypes.node,
  focused: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
}
export default React.memo(TextFieldLabel)
