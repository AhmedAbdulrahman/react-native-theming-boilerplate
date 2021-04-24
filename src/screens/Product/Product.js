import * as React from 'react'
import PropTypes from 'prop-types'
import { SectionList, StyleSheet, ActivityIndicator, Platform, View } from 'react-native'
import { useTheme } from 'styled-components'
import Animated from 'react-native-reanimated'
import { onScrollEvent, useValue } from 'react-native-redash/lib/module/v1'
import Media from 'components/Media'
import ProductMedia from 'containers/ProductMedia'
import Flex from 'components/Flex'
import Divider from 'components/Divider'
import Typography from 'components/Typography'
import Spacing from 'components/Spacing'
import Container from 'components/Container'
import FlatList from 'components/FlatList'
import { featuredItems } from 'screens/Home/data'
import IconHeader from 'components/IconHeader'
import Header from 'components/Header'
import ProductHeaderImage, { HEADER_IMAGE_HEIGHT } from './partials/ProductHeaderImage'
import ProductHeader from './partials/ProductHeader'

const AnimatedSectionList = Animated.createAnimatedComponent(SectionList)

const Product = (props) => {
  const { route } = props
  const { product } = route.params
  const theme = useTheme()

  const scrollView = React.useRef(null)
  const y = useValue(0)
  const onScroll = onScrollEvent({ y })

  const [isLoading, setIsLoading] = React.useState(true)
  const keyExtractor = React.useCallback((item) => item?.key, [])

  const renderFeaturedItem = React.useCallback(
    ({ item }) => {
      return (
        <Spacing key={item} mr={2} mt={2}>
          <Flex>
            <Flex>
              <Media
                uri={item.uri}
                rounded
                style={{
                  width: theme.extras.constants.WINDOW_WIDTH * 0.68,
                  height: theme.extras.constants.WINDOW_WIDTH * 0.4,
                }}
              />
            </Flex>
            <Spacing mt={2}>
              <Flex>
                <Typography color="dark" variant="h6">
                  {item.title}
                </Typography>
                <Typography color="textSecondary" variant="body2" gutterTop>
                  {item.types?.join(' . ')}
                </Typography>
              </Flex>
            </Spacing>
          </Flex>
        </Spacing>
      )
    },
    [theme],
  )

  const renderListItem = React.useCallback(({ item }) => {
    return (
      <Spacing key={item} mt={2} mb={2}>
        <Flex flexDirection="row" justify="space-between">
          <ProductMedia rounded uri={item.uri} style={[StyleSheet.absoluteFillObject]} />
          <Spacing ml={2}>
            <Flex flex={2}>
              <Typography color="dark" variant="h6">
                {item.title}
              </Typography>
              <Typography color="dark" variant="body1" gutterTop>
                {item.description}
              </Typography>
              <Spacing mt={2}>
                <Flex flexDirection="row" justify="space-between">
                  <Typography color="textSecondary" variant="body1">
                    $$ • Asiatisch
                  </Typography>
                  <Typography color="success" variant="body1">
                    USD7.4
                  </Typography>
                </Flex>
              </Spacing>
            </Flex>
          </Spacing>
        </Flex>
      </Spacing>
    )
  }, [])

  const renderSection = React.useCallback(
    ({ section }) => (
      <FlatList
        style={{
          marginBottom: theme.spacing(3),
          ...theme.mixins.container,
        }}
        data={section.sectionContent}
        horizontal={section.horizontal}
        renderItem={section.horizontal ? renderFeaturedItem : renderListItem}
        keyExtractor={keyExtractor}
        snapToInterval={theme.extras.constants.WINDOW_WIDTH * 0.72}
        ItemSeparatorComponent={() => {
          if (Platform.OS !== 'android' && !section.horizontal) {
            return <Divider />
          }
          return null
        }}
      />
    ),
    [keyExtractor, renderFeaturedItem, renderListItem, theme],
  )

  const renderSectionHeader = React.useCallback(
    ({ section }) => (
      <Spacing key={section} mr={2} ml={1}>
        <Typography color="dark" variant="h6" gutterTop>
          {section.title}
        </Typography>
      </Spacing>
    ),
    [],
  )

  // Fake Loading state
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {isLoading ? (
        <Container>
          <Flex align="center" justify="center">
            <ActivityIndicator size="large" />
          </Flex>
        </Container>
      ) : (
        <>
          <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              zIndex: 2,
            }}
          >
            <Header
              leftComponent={<IconHeader />}
              // eslint-disable-next-line react-native/no-inline-styles
              containerStyle={{
                paddingTop: 50,
                backgroundColor: 'transparent',
              }}
            />
          </View>
          {/* eslint-disable-next-line react-native/no-inline-styles */}
          <View style={{ zIndex: 1 }}>
            <ProductHeaderImage uri={product.uri} {...{ y }} />
          </View>

          <Container>
            <Spacing>
              <AnimatedSectionList
                ref={scrollView}
                style={StyleSheet.absoluteFill}
                scrollEventThrottle={1}
                sections={featuredItems}
                renderItem={renderSection}
                renderSectionHeader={renderSectionHeader}
                keyExtractor={keyExtractor}
                stickySectionHeadersEnabled={false}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={
                  <View style={{ marginTop: HEADER_IMAGE_HEIGHT - 10, ...theme.mixins.container }}>
                    <ProductHeader {...{ product }} />
                  </View>
                }
                {...{ onScroll }}
              />
            </Spacing>
          </Container>
        </>
      )}
    </>
  )
}

Product.propTypes = {
  route: PropTypes.object,
}

export default React.memo(Product)
