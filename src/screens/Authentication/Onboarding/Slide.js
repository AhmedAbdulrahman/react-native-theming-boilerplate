import * as React from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet, Dimensions, Image } from 'react-native'

const { width } = Dimensions.get('window')

const Slide = ({ picture }) => {
  return (
    <View style={styles.container}>
      <View style={styles.underlay}>
        <Image source={picture} style={styles.picture} resizeMode="contain" />
      </View>
    </View>
  )
}

Slide.propTypes = {
  picture: PropTypes.number,
}

const styles = StyleSheet.create({
  container: {
    width,
  },
  underlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
  },
  picture: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
  },
})
export default Slide
