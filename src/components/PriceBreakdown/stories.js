import * as React from 'react'
import styled from 'styled-components'
import { text, boolean } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react-native'
import PriceBreakdown from './PriceBreakdown'

const stories = storiesOf('Components/PriceBreakdown', module)

const Box = styled.View((props) => ({
  margin: props.theme.spacing(),
  flex: 1,
}))

const PriceBreakdownStory = () => {
  const props = {
    subtotal: text('subtotal', '950 SEK'),
    discount: text('discount', '-100 SEK'),
    total: text('total', '950 SEK'),
    showBreakdownTotal: boolean('showBreakdownTotal', false),
    isPaid: boolean('paid', false),
    isRefunded: boolean('refunded', false),
  }

  return (
    <Box>
      <PriceBreakdown {...props} />
    </Box>
  )
}

stories.add('Default', PriceBreakdownStory)
