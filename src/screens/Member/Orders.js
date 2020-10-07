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
import { Routes } from 'navigation/Routes'

// const Container = styled.View((props) => ({
//   backgroundColor: props.theme.palette.background.paper.string(),
//   flex: 1,
//   padding: props.theme.spacing(2),
// }))

const OrderMedia = styled(Media)(() => ({
  width: 64,
}))

const OrderListItem = styled(ListItemLink)((props) => ({
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
    <Container>
      <FlatList
        data={orderData}
        renderItem={({ item }) => (
          <OrderListItem disableGutters divider to={Routes.OrderDetails}>
            <OrderMedia style={{ aspectRatio: 64 / 96 }} uri={item.uri} />
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
      />
    </Container>
  )
}

export default Orders
