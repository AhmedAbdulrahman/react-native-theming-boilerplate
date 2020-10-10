/* eslint-disable react-native/no-inline-styles */
import * as React from 'react'
import {View} from 'react-native'
import PropTypes from 'prop-types'
import SvgIcon from 'components/SvgIcon'

const TabBarIcon = (props) => {
  const { icon, focused, ...other } = props
  return (
    <View>
    {focused && <SvgIcon icon="Active" width={28} height={28}  style={{
      position: 'absolute',
      left: -8
    }} {...other} />}
    <SvgIcon icon={icon} width={28} height={28}  {...other} />
    </View>
  )
}

TabBarIcon.propTypes = {
  icon: PropTypes.string,
  focused: PropTypes.bool,
}
export default TabBarIcon
