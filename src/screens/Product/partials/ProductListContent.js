/* eslint-disable max-len */
import React from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import faker from 'faker'
import Typography from 'components/Typography'
import Divider from 'components/Divider'
import ProductListItem from './ProductListItem'

export const MIN_HEADER_HEIGHT = 45

export const items = [...Array(10).keys()].map((i) => ({
  key: `item-${i}`,
  title: faker.commerce.productName(1),
  description: 'Korean fried chicken glazed with Gochujang ',
  price: '26 USD',
  uri: `https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80`,
  types: ['Chinese', 'American', 'Deshi food'],
  ratings: '4.5',
  prep: '25min',
  delivery: 'Free Delivery',
}))

const menu = [
  { name: 'Beef & Lamb', items },
  { name: 'Seafood', items },
  { name: 'Appetizers', items },
  { name: 'Dim Sum', items },
]

export const defaultTabs = menu.map(({ name }) => ({ name, anchor: 0 }))

const ProductListContent = ({ onMeasurement }) => {
  return menu.map(({ name, items: menuItems }, index) => (
    <View
      key={index}
      onLayout={({
        nativeEvent: {
          layout: { y: anchor },
        },
      }) => onMeasurement(index, { name, anchor: anchor - 142 })}
    >
      <Typography color="dark" variant="subhead" gutterTop>
        {name}
      </Typography>
      {menuItems.map((item, j) => {
        const lastItem = menuItems.length === j + 1

        return (
          <React.Fragment key={j}>
            <ProductListItem item={item} />
            {!lastItem && <Divider />}
          </React.Fragment>
        )
      })}
    </View>
  ))
}

ProductListContent.propTypes = {
  y: PropTypes.object,
  onMeasurement: PropTypes.func,
}
export default ProductListContent
