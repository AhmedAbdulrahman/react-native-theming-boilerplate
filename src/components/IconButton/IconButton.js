import * as React from 'react'
import PropTypes from 'prop-types'
import { Pressable } from 'react-native'
import styled, { useTheme } from 'styled-components'
import SvgIcon from 'components/SvgIcon'

export const Container = styled.View((props) => ({
  alignItems: 'center',
  justifyContent: 'center',
  width: 'auto',
  flexGrow: 0,
  flexShrink: 1,
  padding: 12,
  ...(props.size && { padding: 6 }),
}))

const IconButton = React.forwardRef(function IconButton(props, ref) {
  const { disabled, onPress, icon, color, size = 'medium', ...other } = props
  const theme = useTheme()

  const iconProps = {
    alignSelf: 'center',
    color: theme.palette.text.primary.rgb().string(),
    ...(disabled && { color: theme.palette.text.disabled.rgb().string() }),
    ...(color === 'primary' && { color: theme.palette.primary.main.rgb().string() }),
    ...(color === 'secondary' && { color: theme.palette.secondary.main.rgb().string() }),
  }

  return (
    <Container ref={ref} onPress={onPress} disabled={disabled} size={size} {...other}>
      <SvgIcon icon={icon} {...iconProps} />
    </Container>
  )
})

IconButton.propTypes = {
  color: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  onPress: PropTypes.func,
  size: PropTypes.string,
}

export default React.memo(IconButton)
