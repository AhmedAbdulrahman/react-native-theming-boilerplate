import * as React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

function flexPrefix(key) {
  return key.search(/(start|end)/g) !== -1 ? `flex-${key}` : key
}

const View = styled.View((props) => {
  return {
    ...(props.mt && { marginTop: props.theme.spacing(props.mt) }),
    ...(props.mr && { marginRight: props.theme.spacing(props.mr) }),
    ...(props.mb && { marginBottom: props.theme.spacing(props.mb) }),
    ...(props.ml && { marginLeft: props.theme.spacing(props.ml) }),
    flex: props.flex,
    flexDirection: props.flexDirection,
    justifyContent: flexPrefix(props.justify),
    alignItems: flexPrefix(props.align),
    flexWrap: props.flexWrap,
  }
})

const Flex = (props) => {
  const { children, justify, align, flex = 1, ...other } = props
  return (
    <View flex={flex} justify={justify} align={align} {...other}>
      {children}
    </View>
  )
}

Flex.propTypes = {
  children: PropTypes.node,
  justify: PropTypes.string,
  align: PropTypes.string,
  flex: PropTypes.number,
}

Flex.defaultProps = {
  justify: 'start',
  align: 'stretch',
  flex: 1,
}
export default Flex
