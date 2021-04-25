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

  return (
    <TouchableOpacity onPress={handleClick} style={styles.container} {...other}>
      <SvgIcon icon="ChevronLeft" color={theme.palette.common.white.string()} />
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
