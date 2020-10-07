import * as React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { View } from 'react-native'
import Typography from 'components/Typography'
import Flex from 'components/Flex'

const BadgeElement = styled(Flex)((props) => ({
  position: 'absolute',
  top: -8,
  right: -16,
  minWidth: 16,
  paddingHorizontal: 6,
  height: 16,
  borderRadius: 10,
  backgroundColor: props.theme.palette.secondary.main.string(),
}))

const Badge = (props) => {
  const { children, badgeContent: badgeContentProp, ...other } = props

  // wrap children with Text if necessary
  const badgeContent =
    typeof badgeContentProp === 'string' || typeof badgeContentProp === 'number' ? (
      <Typography variant="caption">{badgeContentProp}</Typography>
    ) : (
      badgeContentProp
    )

  return (
    <View {...other}>
      {children}
      <BadgeElement>{badgeContent}</BadgeElement>
    </View>
  )
}
Badge.propTypes = {
  children: PropTypes.node,
  badgeContent: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.node]),
}

export default Badge
