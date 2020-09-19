import * as React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Animated, { Easing } from 'react-native-reanimated'
import { mix, useTransition } from 'react-native-redash'

const Root = styled(Animated.View)(() => {})

// FIXME: this animation is running in the JS thread should ideally run on the UI thread
// look at using Animated.Value and withTiming instead of state and useTiming
const Fade = React.forwardRef(function Fade(props, ref) {
  const {
    children,
    in: inProp = false,
    transitionConfig = {
      duration: 400,
      easing: Easing.inOut(Easing.ease),
    },
    ...other
  } = props

  const transition = useTransition(inProp, transitionConfig)
  const opacity = mix(transition, 0, 1)

  return (
    <Root
      ref={ref}
      style={{
        opacity,
      }}
      {...other}
    >
      {children}
    </Root>
  )
})
Fade.propTypes = {
  children: PropTypes.node,
  in: PropTypes.bool,
  transitionConfig: PropTypes.object,
}

export default React.memo(Fade)
