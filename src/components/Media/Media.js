import * as React from 'react'
import PropTypes from 'prop-types'
import { Animated } from 'react-native'
import styled from 'styled-components'

const BaseMedia = styled.Image((props) => {
  const { theme, rounded } = props

  return {
    ...(rounded && { borderRadius: theme.spacing(1.2) }),
  }
})

const Media = React.forwardRef(function Media(props, ref) {
  const { uri, local, component = BaseMedia, animated, ...other } = props
  const Component = animated ? Animated.createAnimatedComponent(component) : component

  return <Component ref={ref} source={local ? uri : { uri }} {...other} />
})

Media.propTypes = {
  animated: PropTypes.bool,
  component: PropTypes.element,
  local: PropTypes.bool,
  uri: PropTypes.string,
}

export default React.memo(Media)
