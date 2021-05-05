/* eslint-disable react-native/no-inline-styles */
import * as React from 'react'
import { ImageBackground } from 'react-native'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Spacing from 'components/Spacing'
import Typography from 'components/Typography'

const Background = styled(ImageBackground)(() => ({
  flex: 1,
  resizeMode: 'cover',
  justifyContent: 'center',
}))

const Promo = (props) => {
  const { heading, text, media, local, ...other } = props

  return (
    <Spacing container mt={2} mb={4} style={{ height: 170 }} {...other}>
      <Background source={local ? media : { uri: media }} imageStyle={{ borderRadius: 12 }}>
        <Spacing container pt={3} pl={3} pb={3} pr={22}>
          <Typography variant="h3" gutterBottom>
            {heading}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {text}{' '}
          </Typography>
        </Spacing>
      </Background>
    </Spacing>
  )
}
Promo.propTypes = {
  heading: PropTypes.string,
  text: PropTypes.string,
  media: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  local: PropTypes.bool,
}

export default Promo
