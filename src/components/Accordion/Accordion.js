import * as React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { State } from 'react-native-gesture-handler'
import Animated, { useCode, cond, eq, set, not } from 'react-native-reanimated'
import { onGestureEvent } from 'react-native-redash/lib/module/v1'
import Collapse from 'components/Collapse'
import { AccordionProvider } from './AccordionContext'

const Root = styled.View((props) => ({
  borderTopWidth: 1,
  borderTopColor: props.theme.palette.divider.rgb().string(),
  borderBottomWidth: 1,
  borderBottomColor: props.theme.palette.divider.rgb().string(),
  borderStyle: 'solid',
}))

const Accordion = React.forwardRef(function Accordion(props, ref) {
  const { children: childrenProp, ...other } = props
  const expanded = React.useMemo(() => new Animated.Value(0), [])
  const gestureState = new Animated.Value(State.UNDETERMINED)
  const gestureHandler = onGestureEvent({ state: gestureState })

  const [summary, ...children] = React.Children.toArray(childrenProp)

  const contextValue = React.useMemo(
    () => ({
      expanded,
      gestureHandler,
    }),
    [expanded, gestureHandler],
  )

  useCode(() => cond(eq(gestureState, State.END), set(expanded, not(expanded))), [
    expanded,
    gestureState,
  ])

  return (
    <Root ref={ref} {...other}>
      <AccordionProvider value={contextValue}>{summary}</AccordionProvider>
      <Collapse expanded={expanded}>{children}</Collapse>
    </Root>
  )
})

Accordion.propTypes = {
  children: PropTypes.node,
}

export default React.memo(Accordion)
