import * as React from 'react'
import PropTypes from 'prop-types'
import take from 'lodash/take'
import { Animated, FlatList as RNFlatList } from 'react-native'
import { useTheme } from 'styled-components'
import Spacing from 'components/Spacing'
import Typography from 'components/Typography'
import { Routes } from 'navigation/Routes'
import { useLazyRef } from 'hooks'
import Link from 'navigation/Link'
import ResturanttListItem from './partials/ResturanttListItem'

const AnimatedFlatList = Animated.createAnimatedComponent(RNFlatList)

const ResturantList = (props) => {
  const { animated = true, data, horizontal, snapToInterval = true, title, ...other } = props

  const theme = useTheme()
  const scrollX = useLazyRef(() => new Animated.Value(0))

  const IMAGE_SIZE = 65
  const ITEM_FULLSIZE = IMAGE_SIZE * 0.7 + theme.spacing() * 2
  const FlatList = animated ? AnimatedFlatList : RNFlatList
  // handlers
  const onScroll = useLazyRef(() =>
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: { x: scrollX },
          },
        },
      ],
      { useNativeDriver: true },
    ),
  )
  const keyExtractor = React.useCallback((item) => item?.key, [])
  const ListItem = React.useCallback(
    ({ item, index }) => {
      return (
        <ResturanttListItem
          index={index}
          key={item}
          animated={animated}
          resturant={item}
          scrollX={scrollX}
          horizontal={horizontal}
        />
      )
    },
    [animated, horizontal, scrollX],
  )
  return (
    <Spacing container>
      {title && (
        <Spacing container fd="row" jc="space-between" mb={2}>
          <Typography color="dark" variant="subhead">
            {title}
          </Typography>

          <Link to={Routes.Resturants} params={{ data }} variant="body1" color="success">
            Sell all
          </Link>
        </Spacing>
      )}
      <FlatList
        keyExtractor={keyExtractor}
        data={take(data[0].sectionList, 10)}
        horizontal={horizontal}
        renderToHardwareTextureAndroid
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => <ListItem item={item} index={index} />}
        {...(snapToInterval && {
          snapToInterval: ITEM_FULLSIZE,
          bounces: false,
          scrollEventThrottle: 16,
          decelerationRate: 'fast',
        })}
        {...(animated && { ...{ onScroll } })}
        {...other}
      />
    </Spacing>
  )
}

ResturantList.propTypes = {
  animated: PropTypes.bool,
  data: PropTypes.array,
  horizontal: PropTypes.bool,
  snapToInterval: PropTypes.bool,
  title: PropTypes.string,
}

export default ResturantList
