import * as React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { text, boolean } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react-native'
import ProductCard from './ProductCard'

const stories = storiesOf('Containers/ProductCard', module)

stories.add('Default', () => {
  const product = {
    id: text('id', '1234abcd'),
    price: text('price', '250 SEK'),
    oldPrice: text('oldPrice', '450 SEK'),
    images: ['https://source.unsplash.com/random/500x500'],
    name: text('name', 'Elsa skirt'),
    size: text('size', 'M'),
    disabled: boolean('disabled', false),
    hasDiscount: boolean('hasDiscount', false),
    hasSwatches: boolean('hasSwatches', false),
    salePercentage: text('salePercentage', '70%'),
  }

  const props = {
    product,
  }

  return (
    <ScrollView>
      <ProductCard {...props} />
    </ScrollView>
  )
})
