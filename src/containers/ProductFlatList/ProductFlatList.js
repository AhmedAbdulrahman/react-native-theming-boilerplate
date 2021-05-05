import * as React from 'react'
import PropTypes from 'prop-types'
import { FlatList, Platform } from 'react-native'
import { useTheme } from 'styled-components'
import ProductCard from 'containers/ProductCard'
import Spacing from 'components/Spacing'
import Typography from 'components/Typography'
import { Routes } from 'navigation/Routes'
import Link from 'navigation/Link'

const ProductFlatList = (props) => {
  const { data, title, ...other } = props
  const theme = useTheme()

  const ITEM_SIZE =
    Platform.OS === 'ios'
      ? theme.extras.constants.WINDOW_WIDTH
      : theme.extras.constants.WINDOW_WIDTH * 0.74

  const keyExtractor = React.useCallback((item) => item?.key, [])

  const renderListItem = React.useCallback(
    ({ item }) => {
      return (
        <Spacing container key={item} mb={4}>
          <ProductCard
            item={item}
            MediaContaierProps={{ style: { height: 200 } }}
            MediaProps={{ width: ITEM_SIZE * 0.23, height: 200 }}
          />
        </Spacing>
      )
    },
    [ITEM_SIZE],
  )

  return (
    <FlatList
      keyExtractor={keyExtractor}
      data={data}
      renderToHardwareTextureAndroid
      scrollEventThrottle={1}
      decelerationRate="fast"
      showsVerticalScrollIndicator={false}
      renderItem={renderListItem}
      ListHeaderComponent={() =>
        title ? (
          // eslint-disable-next-line no-unused-vars
          <Spacing container fd="row" jc="space-between" mb={2}>
            <Typography color="dark" variant="subhead">
              {title}
            </Typography>
            <Link to={Routes.Resturants} params={{ data }} variant="body1" color="success">
              Sell all
            </Link>
          </Spacing>
        ) : null
      }
      {...other}
    />
  )
}

ProductFlatList.propTypes = {
  data: PropTypes.object,
  title: PropTypes.string,
}

export default ProductFlatList
