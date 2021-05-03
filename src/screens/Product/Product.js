import * as React from 'react'
import PropTypes from 'prop-types'
import { ActivityIndicator, ScrollView } from 'react-native'
import Animated from 'react-native-reanimated'
import { onScrollEvent, useValue } from 'react-native-redash/lib/module/v1'
import Flex from 'components/Flex'
import Typography from 'components/Typography'
import Spacing from 'components/Spacing'
import Container from 'components/Container'
import { featuredItems } from 'screens/Home/data'
import ProductHeaderImage, { HEADER_IMAGE_HEIGHT } from './partials/ProductHeaderImage'
import ProductHeader from './partials/ProductHeader'
import ProductFeaturedItem from './partials/ProductFeaturedItem'

const Product = (props) => {
  const { route } = props
  const { data } = route.params

  const [isLoading, setIsLoading] = React.useState(true)
  const scrollView = React.useRef(null)
  const y = useValue(0)
  const onScroll = onScrollEvent({ y })

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <Container flex={1}>
      {isLoading ? (
        <Container flex={1}>
          <Flex justify="center" align="center">
            <ActivityIndicator size="large" />
          </Flex>
        </Container>
      ) : (
        <>
          <ProductHeaderImage uri={data.uri} {...{ y }} />
          <Animated.ScrollView
            ref={scrollView}
            scrollEventThrottle={1}
            removeClippedSubviews
            nestedScrollEnabled
            showsVerticalScrollIndicator={false}
            {...{ onScroll }}
          >
            <Flex style={{ marginTop: HEADER_IMAGE_HEIGHT - 10 }}>
              <ProductHeader resturant={data} />
              <Typography color="dark" variant="subhead" gutterBottom>
                Featured Items
              </Typography>
              <Spacing conainer mb={3}>
                <ScrollView
                  scrollEventThrottle={1}
                  removeClippedSubviews
                  nestedScrollEnabled
                  showsVerticalScrollIndicator={false}
                  showsHorizontalScrollIndicator={false}
                  horizontal
                >
                  {featuredItems[0].sectionContent.map((item, j) => {
                    const lastItem = featuredItems[0].sectionContent.length === j + 1
                    return <ProductFeaturedItem key={j} item={item} isLastItem={lastItem} />
                  })}
                </ScrollView>
              </Spacing>
            </Flex>
          </Animated.ScrollView>
        </>
      )}
    </Container>
  )
}

Product.propTypes = {
  route: PropTypes.object,
}

export default React.memo(Product)
