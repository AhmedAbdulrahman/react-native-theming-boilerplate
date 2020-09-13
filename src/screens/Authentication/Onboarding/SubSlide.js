import * as React from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet } from 'react-native'
import { useTheme } from 'styled-components'
import Button from 'components/Button'

const SubSlide = ({ title, description, last, onPress }) => {
  const theme = useTheme()
  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: theme.palette.text.primary.rgb().string() }]}>
        {title}
      </Text>
      <Text style={[styles.description, { color: theme.palette.text.primary.rgb().string() }]}>
        {description}
      </Text>
      <Button size="large" color="success" fullWidth {...{ onPress }}>
        {last ? 'GET STARTED' : 'NEXT'}
      </Button>
    </View>
  )
}

SubSlide.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  last: PropTypes.bool,
  onPress: () => {},
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  title: {
    fontFamily: 'SFProText-Bold',
    fontSize: 24,
    textAlign: 'center',
    lineHeight: 30,
    marginBottom: 12,
  },
  description: {
    fontFamily: 'SFProText-Regular',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
})

export default SubSlide
