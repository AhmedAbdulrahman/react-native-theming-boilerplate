import React from 'react'
import { StyleSheet, View } from 'react-native'
import PropTypes from 'prop-types'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import Typography from 'components/Typography'

const styles = StyleSheet.create({
  container: {
    height: 45,
    paddingHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
})

const ProductTab = ({ name, color, onMeasurement, onPress }) => {
  return (
    <TouchableWithoutFeedback {...{ onPress }}>
      <View
        onLayout={
          onMeasurement
            ? ({
                nativeEvent: {
                  layout: { width },
                },
              }) => onMeasurement(width)
            : undefined
        }
        style={styles.container}
      >
        {/* <Text style={[styles.text, { color }]}>{name}</Text> */}
        <Typography color={color} variant="subhead">
          {name}
        </Typography>
      </View>
    </TouchableWithoutFeedback>
  )
}

ProductTab.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  onMeasurement: PropTypes.func,
  onPress: PropTypes.func,
}
export default ProductTab
