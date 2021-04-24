import * as React from 'react'
import styled, { useTheme } from 'styled-components'
import { FlatList } from 'react-native'
import faker from 'faker'
import ListItemLink from 'components/ListItemLink'
import Media from 'components/Media'
import Flex from 'components/Flex'
import Typography from 'components/Typography'
import Container from 'components/Container'
import Spacing from 'components/Spacing'
import SvgIcon from 'components/SvgIcon'
import SafeAreaView from 'components/SafeAreaView'
import { Routes } from 'navigation/Routes'

const OrderMedia = styled(Media)(() => ({
  width: 100,
  height: '100%',
}))

const OrderListItem = styled(ListItemLink)(() => ({
  alignItems: 'flex-start',
}))

// TODO: replace this with actual data
const orderData = [...Array(10).keys()].map((i) => {
  return {
    id: `order-${i}`,
    orderNumber: 6000214,
    title: faker.commerce.productName(1),
    numProducts: 1,
    total: 249,
    completed: true,
    date: '19 aug',
    uri: `https://source.unsplash.com/random/${64 + i}x${96 + i}?food}`,
    // this is data for renderItem FlatList
  }
})

const Orders = () => {
  const theme = useTheme()
  return (
    <SafeAreaView edges={['top']}>
      <Container>
        <FlatList
          data={orderData}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <OrderListItem disableGutters divider to={Routes.OrderDetails}>
              <Spacing mt={1} mb={2}>
                <OrderMedia uri={item.uri} />
              </Spacing>
              <Spacing ml={2}>
                <Flex>
                  <Typography color="dark" variant="body2">
                    Order No {item.orderNumber}
                  </Typography>
                  <Typography color="dark" variant="body2">
                    {item.numProducts} Item
                  </Typography>
                  <Typography color="dark" variant="body1">
                    {item.total} SEK
                  </Typography>
                  {item.completed && (
                    <Flex flexDirection="row" align="center">
                      <SvgIcon icon="Complete" color={theme.palette.success.main.string()} />

                      <Typography variant="caption">Completed</Typography>
                    </Flex>
                  )}
                </Flex>
                <Typography variant="caption" color="textSecondary">
                  Completed {item.date}.
                </Typography>
              </Spacing>
            </OrderListItem>
          )}
          ListHeaderComponent={
            <Spacing mt={3} mr={4} mb={4}>
              <Flex flex={1}>
                <Typography color="dark" variant="h4" paragraph>
                  Your Orders
                </Typography>
                <Typography color="grey" variant="body1">
                  Update your settings like notifications, payments, profile edit etc.
                </Typography>
              </Flex>
            </Spacing>
          }
        />
      </Container>
    </SafeAreaView>
  )
}

export default Orders
