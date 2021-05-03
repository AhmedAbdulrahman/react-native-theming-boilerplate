import * as React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View } from 'react-native'
import styled from 'styled-components'
import { useResponsiveWidth } from 'react-native-responsive-dimensions'
import Image from 'react-native-auto-height-image'

const Root = styled(View)((props) => {
  const { theme, rounded = true } = props
  return {
    ...(rounded && { borderRadius: theme.spacing(1.2) }),
    overflow: 'hidden',
  }
})

const BaseMedia = styled(Image)((props) => {
  const { width } = props
  return {
    flexGrow: 1,
    width,
  }
})

const Overlay = styled(View)((props) => {
  const { backgroundColor = 'black', opacity = 0.3 } = props
  return {
    ...StyleSheet.absoluteFillObject,
    opacity,
    backgroundColor,
  }
})

const Media = React.forwardRef(function Media(props, ref) {
  const {
    uri,
    local,
    withOverlay,
    overlayProps = {},
    MediaProps: {
      width: MediaPropsWidth = 45,
      height: MediaPropsHeight = 45,
      ...MediaPropsProp
    } = {},
    onLoad,
    ...other
  } = props

  const width = useResponsiveWidth(MediaPropsWidth)
  const height = useResponsiveWidth(MediaPropsHeight)

  return (
    <Root ref={ref} {...other}>
      <BaseMedia
        source={local ? uri : { uri }}
        width={width}
        height={height}
        onLoad={onLoad}
        {...MediaPropsProp}
      />
      {withOverlay && <Overlay {...overlayProps} />}
    </Root>
  )
})

Media.propTypes = {
  animated: PropTypes.bool,
  component: PropTypes.element,
  local: PropTypes.bool,
  MediaProps: PropTypes.object,
  onLoad: PropTypes.func,
  overlayProps: PropTypes.object,
  uri: PropTypes.string,
  width: PropTypes.number,
  withOverlay: PropTypes.bool,
}

export default React.memo(Media)
