import * as React from 'react'
import { ScrollView as RNScrollView, View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { generateMasonryGrid } from 'utils'

const ScrollView = ({
  children = [],
  columns = 2,
  columnStyle = null,
  oddColumnStyle = null,
  evenColumnStyle = null,
  horizontal,
  ...otherProps
}) => {
  const masonryGrid = generateMasonryGrid(children, columns)

  return (
    <RNScrollView
      contentContainerStyle={horizontal ? styles.horizontalColumnStyle : styles.verticalColumnStyle}
      horizontal={horizontal}
      {...otherProps}
    >
      {masonryGrid.map((column, columnIndex) => {
        return (
          <View
            key={columnIndex}
            style={[
              !horizontal ? styles.horizontalColumnStyle : styles.verticalColumnStyle,
              columnStyle,
              columnIndex % 2 === 0 ? evenColumnStyle : oddColumnStyle,
            ]}
          >
            {column.map((item) => item)}
          </View>
        )
      })}
    </RNScrollView>
  )
}

const styles = StyleSheet.create({
  verticalColumnStyle: { flexDirection: 'row' },
  horizontalColumnStyle: { flexDirection: 'column' },
})

ScrollView.propTypes = {
  children: PropTypes.array,
  columns: PropTypes.number,
  columnStyle: PropTypes.object,
  oddColumnStyle: PropTypes.object,
  evenColumnStyle: PropTypes.object,
  horizontal: PropTypes.bool,
}
export default ScrollView
