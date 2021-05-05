import * as React from 'react'
import PropTypes from 'prop-types'
import { ScrollView, RefreshControl, LogBox } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useTheme } from 'styled-components'
import ResturantList from 'blocks/ResturantList'
import Header from 'components/Header'
import Typography from 'components/Typography'
import Container from 'components/Container'
import SafeAreaView from 'components/SafeAreaView'
import IconHeader from 'components/IconHeader'

LogBox.ignoreLogs(['VirtualizedLists should never be nested'])

const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout)
  })
}

const Resturants = (props) => {
  const { route } = props
  const { data } = route.params

  const theme = useTheme()
  const insets = useSafeAreaInsets()

  const [refreshing, setRefreshing] = React.useState(false)

  const onRefresh = React.useCallback(() => {
    setRefreshing(true)

    wait(2000).then(() => setRefreshing(false))
  }, [])

  return (
    <SafeAreaView edges={['top']}>
      <Header
        leftComponent={<IconHeader color="grey" />}
        centerComponent={
          <Typography color="dark" variant="body1">
            Resturants
          </Typography>
        }
        // eslint-disable-next-line react-native/no-inline-styles
        containerStyle={{
          borderBottomColor: theme.palette.grey[900].string(),
          borderBottomWidth: 1,
          paddingBottom: 10,
        }}
      />

      <ScrollView
        removeClippedSubviews
        nestedScrollEnabled
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={theme.palette.text.primary.rgb().string()}
          />
        }
        style={{
          paddingTop: (insets.top / 2) * 0.6,
        }}
      >
        <Container>
          <ResturantList title="All Restaurants" data={data} animated={false} />
        </Container>
      </ScrollView>
    </SafeAreaView>
  )
}

Resturants.propTypes = {
  route: PropTypes.object,
}

export default React.memo(Resturants)
