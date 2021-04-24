import * as React from 'react'
import { FlatList } from 'react-native'
import styled, { useTheme } from 'styled-components'
import Typography from 'components/Typography'
import StyledAccordion from 'components/Accordion'
import AccordionHeader from 'components/AccordionHeader'
import AccordionContent from 'components/AccordionContent'
import Button from 'components/Button'
import Flex from 'components/Flex'
import SvgIcon from 'components/SvgIcon'
import Media from 'components/Media'
import Spacing from 'components/Spacing'
import PriceBreakdown from 'components/PriceBreakdown'
import Divider from 'components/Divider'
import ListItem from 'components/ListItem'
import SafeAreaView from 'components/SafeAreaView'
import IconHeader from 'components/IconHeader'
import Header from 'components/Header'

const RootFlatList = styled(FlatList)((props) => ({
  backgroundColor: props.theme.palette.background.default.string(),
  flex: 1,
  padding: props.theme.spacing(2),
}))

const OrderListItem = styled(ListItem)(() => ({
  alignItems: 'flex-start',
}))

const OrderMedia = styled(Media)(() => ({
  width: 64,
}))

const Accordion = styled(StyledAccordion)((props) => ({
  marginVertical: props.theme.spacing(3),
}))

const Price = styled(PriceBreakdown)(() => ({
  flex: 0,
}))

const order = {
  title: 'Fia hood',
  id: '0',
  size: 'M',
  total: 249,
  image: 'https://placekitten.com/64/96',
}

const OrderDetails = () => {
  const theme = useTheme()
  return (
    <SafeAreaView edges={['top']}>
      <Header
        leftComponent={<IconHeader />}
        centerComponent={<Typography>{order.title}</Typography>}
      />
      <RootFlatList
        data={[order]}
        ListHeaderComponent={() => (
          <>
            <Typography>Jane Doe</Typography>
            <Typography>Torkel Knutssonsgatan 27</Typography>
            <Typography>118 25 Stockholm</Typography>
            <Typography>SE</Typography>
            <Accordion>
              <AccordionHeader>
                <Typography>Billing Address</Typography>
              </AccordionHeader>
              <AccordionContent>
                <Typography>Jane Doe</Typography>
                <Typography>Torkel Knutssonsgatan 27</Typography>
                <Typography>118 25 Stockholm</Typography>
                <Typography>SE</Typography>
              </AccordionContent>
            </Accordion>
            <Button size="large" color="success" fullWidth>
              Download Receipt
            </Button>
            <Spacing mt={3} mb={1}>
              <Flex flex={0} flexDirection="row" align="center">
                <Flex flexDirection="row" align="center">
                  <SvgIcon icon="Complete" color={theme.palette.success.main.string()} />
                  <Typography color="dark" variant="caption">
                    Ordered
                  </Typography>
                </Flex>
                <Typography variant="caption" color="textSecondary">
                  Ordered on 19 aug.
                </Typography>
              </Flex>
            </Spacing>
            <Divider />
          </>
        )}
        renderItem={(data) => {
          const item = data.item
          return (
            <OrderListItem disableGutters>
              <OrderMedia style={{ aspectRatio: 64 / 96 }} uri={item.image} />
              <Spacing ml={2}>
                <Flex>
                  <Typography color="dark" variant="body2">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {item.size}
                  </Typography>
                </Flex>
                <Typography color="dark" variant="body1">
                  {item.total} SEK
                </Typography>
              </Spacing>
            </OrderListItem>
          )
        }}
        ListFooterComponent={() => <Price subtotal="249 SEK" total="249 SEK" showBreakdownTotal />}
      />
    </SafeAreaView>
  )
}

export default OrderDetails
