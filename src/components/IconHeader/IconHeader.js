import * as React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useTheme } from 'styled-components'
import SvgIcon from 'components/SvgIcon'

const IconHeader = ({ onPress, ...other }) => {
  const navigation = useNavigation()
  const theme = useTheme()
  const handleClick = onPress || (() => navigation.goBack())
  const iconColor = theme.palette.text.primary.string()

  return (
    <TouchableOpacity onPress={handleClick} style={styles.container} {...other}>
      <SvgIcon icon="ChevronLeft" color={iconColor} />
    </TouchableOpacity>
  )
}

IconHeader.propTypes = {
  onPress: PropTypes.func,
}

const styles = StyleSheet.create({
  container: {},
})

export default IconHeader
