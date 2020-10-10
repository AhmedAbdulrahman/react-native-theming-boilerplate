import * as React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Pressable } from 'react-native'
import Typography from 'components/Typography'

const Item = styled.View((props) => ({
  paddingVertical: props.theme.spacing(2),
  paddingHorizontal: props.disableGutters ? 0 : props.theme.spacing(2),
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
}))

const Divider = styled.View((props) => ({
  backgroundColor: props.theme.palette.divider.string(),
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  height: 1,
}))

const ListItem = (props) => {
  const {
    children: childrenProp,
    divider,
    component: componentProp = Item,
    button,
    ...other
  } = props

  const Component = button ? Pressable : componentProp

  // wrap children with Text if necessary
  const children =
    typeof childrenProp === 'string' ? <Typography>{childrenProp}</Typography> : childrenProp

  return (
    <Item as={Component} {...other}>
      {children}
      {divider && <Divider />}
    </Item>
  )
}
ListItem.propTypes = {
  children: PropTypes.node,
  divider: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  button: PropTypes.bool,
}

export default ListItem
