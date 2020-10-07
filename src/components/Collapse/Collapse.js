import * as React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Animated, { Easing } from 'react-native-reanimated'
import { mix, withTransition } from 'react-native-redash'

const Root = styled(Animated.View)({
  overflow: 'hidden',
  background: 'transparent',
})

const Container = styled.View({
  position: 'absolute',
  bottom: 0,
  width: '100%',
})

const Collapse = React.forwardRef(function Collapse(props, ref) {
  const { children, expanded, ...other } = props
  const mounted = React.useRef(false)
  const [heightTo, setHeightTo] = React.useState(0)

  const trans = withTransition(expanded, { easing: Easing.inOut(Easing.ease) })
  const height = mix(trans, 0, heightTo)

  const handleLayout = React.useCallback((e) => {
    if (!mounted.current) {
      setHeightTo(e.nativeEvent.layout.height)
      mounted.current = true
    }
  }, [])

  return (
    <Root ref={ref} style={{ height }} {...other}>
      <Container onLayout={handleLayout}>{children}</Container>
    </Root>
  )
})

Collapse.propTypes = {
  children: PropTypes.node,
  expanded: PropTypes.bool,
}
export default React.memo(Collapse)
