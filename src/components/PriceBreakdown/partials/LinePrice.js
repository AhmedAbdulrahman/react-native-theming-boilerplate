import styled from 'styled-components'

const LinePrice = styled.View((props) => ({
  flexDirection: 'row',
  alignItems: 'baseline',
  justifyContent: 'space-between',
  ...(props.isTotal && { marginTop: props.theme.spacing(2) }),
}))

export default LinePrice
