import styled from 'styled-components'
import Constants from 'expo-constants'

const Container = styled.View((props) => ({
  backgroundColor: props.theme.palette.background.paper.string(),
  flex: 1,
  paddingHorizontal: props.theme.spacing(1),
  paddingTop: Constants.statusBarHeight,
}))

export default Container
