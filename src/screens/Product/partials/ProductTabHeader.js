import React, { useState } from 'react'
import { Platform, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import Animated, {
  Value,
  and,
  block,
  cond,
  greaterOrEq,
  interpolate,
  lessOrEq,
  set,
  useCode,
} from 'react-native-reanimated'
import MaskedView from '@react-native-community/masked-view'
import { withTransition } from 'react-native-redash/lib/module/v1'
import ProductTabs from './ProductTabs'

const styles = StyleSheet.create({
  container: {
    marginLeft: 8,
    height: 45,
    marginBottom: 8,
    flexDirection: 'row',
  },
})

const ProductTabHeader = ({ transition, y, tabs, scrollView }) => {
  const index = new Value(0)
  const [measurements, setMeasurements] = useState(new Array(tabs.length).fill(0))
  const opacity = transition
  const indexTransition = withTransition(index)
  const width = interpolate(indexTransition, {
    inputRange: tabs.map((_, i) => i),
    outputRange: measurements,
  })
  const translateX = interpolate(indexTransition, {
    inputRange: tabs.map((_tab, i) => i),
    outputRange: measurements.map((_, i) => {
      return (
        -1 * measurements.filter((_measurement, j) => j < i).reduce((acc, m) => acc + m, 0) - 8 * i
      )
    }),
  })
  const style = {
    borderRadius: 24,
    backgroundColor: 'black',
    width,
    flex: 1,
  }
  const maskElement = <Animated.View {...{ style }} />
  useCode(
    () =>
      block(
        tabs.map((tab, i) =>
          cond(
            i === tabs.length - 1
              ? greaterOrEq(y, tab.anchor)
              : and(greaterOrEq(y, tab.anchor), lessOrEq(y, tabs[i + 1].anchor)),
            set(index, i),
          ),
        ),
      ),
    [index, tabs, y],
  )
  return (
    <Animated.View style={[styles.container, { opacity }]}>
      <Animated.View
        style={{
          ...StyleSheet.absoluteFillObject,
          transform: [{ translateX }],
        }}
      >
        <ProductTabs
          onMeasurement={(i, m) => {
            measurements[i] = m
            setMeasurements([...measurements])
          }}
          {...{ tabs, translateX }}
        />
      </Animated.View>

      {Platform.OS === 'ios' && (
        // see https://github.com/react-native-community/react-native-masked-view/issues/22
        <MaskedView style={StyleSheet.absoluteFill} maskElement={maskElement}>
          <Animated.View
            style={{
              ...StyleSheet.absoluteFillObject,
              transform: [{ translateX }],
            }}
          >
            <ProductTabs
              active
              onPress={(i) => {
                if (scrollView.current) {
                  scrollView.current.getNode().scrollTo({ y: tabs[i].anchor + 1 })
                }
              }}
              {...{ tabs, translateX }}
            />
          </Animated.View>
        </MaskedView>
      )}
    </Animated.View>
  )
}

ProductTabHeader.propTypes = {
  transition: PropTypes.object,
  y: PropTypes.object,
  tabs: PropTypes.array,
  scrollView: PropTypes.object,
}
export default ProductTabHeader
