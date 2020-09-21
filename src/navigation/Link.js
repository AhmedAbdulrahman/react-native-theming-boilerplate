import * as React from 'react'
import PropTypes from 'prop-types'
import { useNavigation } from '@react-navigation/native'
import Typography from 'components/Typography'

const Link = React.forwardRef(function Link(props, ref) {
  const {
    component: Component = Typography,
    to,
    onPress,
    params = {},
    accessibilityRole = 'link',
    children,
    ...other
  } = props
  const navigation = useNavigation()

  const extraProps = {}

  if (Component.type?.displayName === 'Typography') {
    extraProps.underline = true
  }

  const handlePress = React.useCallback(
    (e) => {
      navigation.push(to, params)
      if (onPress) {
        onPress(e)
      }
    },
    [navigation, onPress, params, to],
  )

  return (
    <Component ref={ref} onPress={handlePress} accessibilityRole={accessibilityRole} {...other}>
      {children}
    </Component>
  )
})
Link.propTypes = {
  component: PropTypes.element,
  to: PropTypes.string,
  onPress: PropTypes.func,
  params: PropTypes.object,
  children: PropTypes.node,
  accessibilityRole: PropTypes.string,
}
export default React.memo(Link)
