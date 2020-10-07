import * as React from 'react'
import styled from 'styled-components'

const Root = styled.View((props) => ({
  width: '100%',
  height: 1,
  backgroundColor: props.theme.palette.divider.string(),
}))

const Divider = () => {
  return <Root />
}

export default Divider
