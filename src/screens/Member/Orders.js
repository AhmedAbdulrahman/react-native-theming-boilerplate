import * as React from 'react'
import styled, { useTheme } from 'styled-components'
import { FlatList } from 'react-native'
import faker from 'faker'
import ListItemLink from 'components/ListItemLink'
import Media from 'containers/ProductMedia'
import Flex from 'components/Flex'
import Typography from 'components/Typography'
import Container from 'components/Container'
import Spacing from 'components/Spacing'
import SvgIcon from 'components/SvgIcon'
import SafeAreaView from 'components/SafeAreaView'
import { Routes } from 'navigation/Routes'

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
    uri: `https://source.unsplash.com/random/${1000 + i}x${900 + i}?food}`,
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
              <Spacing mt={1}>
                <Media uri={item.uri} MediaProps={{ width: 35, height: 25 }} />
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
            <Spacing container mt={3} mr={4} mb={4}>
              <Typography color="dark" variant="h4" paragraph>
                Your Orders
              </Typography>
              <Typography color="grey" variant="body1">
                Update your settings like notifications, payments, profile edit etc.
              </Typography>
            </Spacing>
          }
        />
      </Container>
    </SafeAreaView>
  )
}

export default Orders
