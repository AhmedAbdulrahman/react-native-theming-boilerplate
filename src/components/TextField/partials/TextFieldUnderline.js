import * as React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet } from 'react-native'
import styled from 'styled-components'
import Animated from 'react-native-reanimated'
import { mix, withSpringTransition } from 'react-native-redash'

const Root = styled.View({
  overflow: 'hidden',
  ...StyleSheet.absoluteFillObject,
})

const Line = styled(Animated.View)((props) => ({
  position: 'absolute',
  bottom: 0,
  right: 0,
  left: 0,
  height: StyleSheet.hairlineWidth,
  backgroundColor: props.theme.palette.text.primary.rgb().string(),

  ...(props.disabled && {
    bottom: -1.5,
    left: -1.5,
    right: -1.5,
    backgroundColor: 'transparent',
    borderStyle: 'dotted',
    borderWidth: 1,
    borderColor: props.theme.palette.action.disabled.rgb().string(),
  }),
  ...(props.error && { backgroundColor: props.theme.palette.error.main.rgb().string() }),
}))

const FocusLine = styled(Animated.View)((props) => ({
  position: 'absolute',
  bottom: 0,
  right: 0,
  left: 0,
  height: 2,
  backgroundColor: props.theme.palette.text.primary.rgb().string(),
  ...(props.error && { backgroundColor: props.theme.palette.error.main.rgb().string() }),
}))

const TextFieldUnderline = (props) => {
  const { focused, disabled, error, ...other } = props

  const transition = withSpringTransition(focused, {
    damping: 12,
    mass: 0.2,
    restSpeedThreshold: 0.2,
    restDisplacementThreshold: 0.2,
  })
  const scaleX = mix(transition, 0, 1)

  return (
    <Root pointerEvents="none" {...other}>
      <Line disabled={disabled} error={error} />
      <FocusLine style={{ transform: [{ scaleX }] }} error={error} />
    </Root>
  )
}
TextFieldUnderline.propTypes = {
  error: PropTypes.string,
  focused: PropTypes.object,
  disabled: PropTypes.bool,
}
export default React.memo(TextFieldUnderline)
