import * as React from 'react'
import { ScrollView, View } from 'react-native'
import faker from 'faker'
import { useTheme } from 'styled-components'
import SvgIcon from 'components/SvgIcon'
import Flex from 'components/Flex'
import Typography from 'components/Typography'
import Spacing from 'components/Spacing'
import Container from 'components/Container'
import ProductMedia from 'containers/ProductMedia'

const data = [...Array(20).keys()].map((i) => ({
  key: `section-${i}`,
  title: faker.commerce.productName().substring(0, 15),
  address: `${faker.address.county()}, ${faker.address.country()}`.substring(0, 15),
  uri: `https://source.unsplash.com/random/${800 + i}x${800 + i}?resturants`,
  // aspectRatio: i % 2 === 0 ? 220 / 145 : 195 / 140,
  aspectRatio: i % 2 === 0 ? 220 / 160 : 195 / 132,
  delivery: 'Free',
  rating: '4.5',
  prepration: '25min',
}))

const Search = () => {
  const theme = useTheme()
  const width = (theme.extras.constants.WINDOW_WIDTH - theme.spacing() * 2 - theme.spacing()) / 2
  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Spacing mt={3} mr={4} mb={4}>
          <Flex>
            <Typography color="dark" variant="h4" paragraph>
              Search Resturants
            </Typography>
            <Typography color="grey" variant="body1">
              Update your settings like notifications, payments, profile edit etc.
            </Typography>
          </Flex>
        </Spacing>
        <Flex flexDirection="row">
          <Flex>
            {data
              .filter((_, i) => i % 2 !== 0)
              .map((item) => (
                <View
                  key={item.uri}
                  style={{
                    marginRight: theme.spacing(1.2),
                    marginBottom: theme.spacing(1),
                  }}
                >
                  <ProductMedia
                    rounded
                    uri={item.uri}
                    style={{
                      width,
                      height: width * item.aspectRatio,
                      marginBottom: theme.spacing(2),
                    }}
                  />
                  <Flex
                    // eslint-disable-next-line react-native/no-inline-styles
                    style={{
                      position: 'absolute',
                      bottom: 85,
                      left: 15,
                    }}
                  >
                    <Flex align="center" flexDirection="row">
                      <Spacing mr={1}>
                        <SvgIcon icon="Time" color={theme.palette.common.white.string()} />
                      </Spacing>
                      <Typography color="textWhite" variant="body2">
                        {item.prepration}
                      </Typography>
                    </Flex>
                    <Flex align="center" flexDirection="row">
                      <Spacing mr={1}>
                        <SvgIcon icon="Delivery" color={theme.palette.common.white.string()} />
                      </Spacing>
                      <Typography color="textWhite" variant="body2">
                        {item.delivery}
                      </Typography>
                    </Flex>
                  </Flex>
                  <View
                    style={{
                      marginBottom: theme.spacing(1),
                    }}
                  >
                    <Typography color="dark" variant="h6">
                      {item.title}
                    </Typography>
                    <Typography color="textSecondary" variant="body1" gutterTop>
                      {item.address}
                    </Typography>
                  </View>
                </View>
              ))}
          </Flex>
          <Flex>
            {data
              .filter((_, i) => i % 2 === 0)
              .map((item) => (
                <View
                  key={item.uri}
                  style={{
                    marginLeft: theme.spacing(1.5),
                    marginBottom: theme.spacing(1),
                  }}
                >
                  <ProductMedia
                    rounded
                    uri={item.uri}
                    style={{
                      width,
                      height: width * item.aspectRatio,
                      marginBottom: theme.spacing(2),
                    }}
                  />
                  <Flex
                    // eslint-disable-next-line react-native/no-inline-styles
                    style={{
                      position: 'absolute',
                      bottom: 85,
                      left: 15,
                    }}
                  >
                    <Flex align="center" flexDirection="row">
                      <Spacing mr={1}>
                        <SvgIcon icon="Time" color={theme.palette.common.white.string()} />
                      </Spacing>
                      <Typography color="textWhite" variant="body2">
                        {item.prepration}
                      </Typography>
                    </Flex>
                    <Flex align="center" flexDirection="row">
                      <Spacing mr={1}>
                        <SvgIcon icon="Delivery" color={theme.palette.common.white.string()} />
                      </Spacing>
                      <Typography color="textWhite" variant="body2">
                        {item.delivery}
                      </Typography>
                    </Flex>
                  </Flex>
                  <View
                    style={{
                      marginBottom: theme.spacing(1),
                    }}
                  >
                    <Typography color="dark" variant="h6">
                      {item.title}
                    </Typography>
                    <Typography color="textSecondary" variant="body1" gutterTop>
                      {item.address}
                    </Typography>
                  </View>
                </View>
              ))}
          </Flex>
        </Flex>
      </ScrollView>
    </Container>
  )
}

export default React.memo(Search)
