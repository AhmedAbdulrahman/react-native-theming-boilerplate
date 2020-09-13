import * as React from 'react'
import { Platform } from 'react-native'
import styled from 'styled-components'

const BaseMedia = styled.Image((props) => {
  const { theme, rounded, enableShadow } = props

  return {
    ...(rounded && { borderRadius: theme.spacing(1.2) }),
    ...(enableShadow && {
      ...Platform.select({
        ios: {
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.8,
          shadowRadius: 2,
        },
        android: {
          elevation: 5,
        },
      }),
    }),
  }
})

const Media = React.forwardRef(function Media(props, ref) {
  const { uri, local, component = BaseMedia, ...other } = props
  const Component = component

  return <Component ref={ref} source={local ? uri : { uri }} {...other} />
})

export default React.memo(Media)
