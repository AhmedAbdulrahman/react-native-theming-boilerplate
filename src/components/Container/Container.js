import styled from 'styled-components'
import Constants from 'expo-constants'

const Container = styled.View((props) => ({
  ...props.theme.mixins.container,
  backgroundColor: props.theme.palette.background.default.string(),
  flex: 1,
  paddingTop: Constants.statusBarHeight * 0.1,
}))

export default Container
