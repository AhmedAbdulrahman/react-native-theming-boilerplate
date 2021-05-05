import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import PropTypes from 'prop-types'
import ProductTab from './ProductTab'

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'row',
  },
})

const ProductTabs = ({ tabs, active, onMeasurement, onPress }) => (
  <View style={styles.overlay}>
    {tabs.map((tab, index) => (
      <ProductTab
        key={index}
        // eslint-disable-next-line react/jsx-no-bind
        onMeasurement={onMeasurement ? onMeasurement.bind(null, index) : undefined}
        color={active ? 'dark' : 'grey'}
        // eslint-disable-next-line react/jsx-no-bind
        onPress={onPress ? onPress.bind(null, index) : undefined}
        {...tab}
      />
    ))}
  </View>
)

ProductTabs.propTypes = {
  tabs: PropTypes.array,
  active: PropTypes.bool,
  onMeasurement: PropTypes.func,
  onPress: PropTypes.func,
}

export default ProductTabs
