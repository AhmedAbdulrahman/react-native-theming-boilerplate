import * as React from 'react'
import PropTypes from 'prop-types'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import ListItem from 'components/ListItem'

const ListItemLink = (props) => {
  const { children, to, params, ...other } = props
  const navigation = useNavigation()

  const handlePress = React.useCallback(() => {
    navigation.navigate(to, params)
  }, [navigation, params, to])

  return (
    <ListItem component={TouchableOpacity} onPress={handlePress} {...other}>
      {children}
    </ListItem>
  )
}

ListItemLink.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string,
  params: PropTypes.object,
}
export default ListItemLink
