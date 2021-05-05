/* eslint-disable global-require */
import * as React from 'react'
import { ScrollView, RefreshControl, LogBox } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useTheme } from 'styled-components'
import Promo from 'blocks/Promo'
import ResturantList from 'blocks/ResturantList'
import Header from 'components/Header'
import { useModal } from 'containers/Modal'
import Typography from 'components/Typography'
import Flex from 'components/Flex'
import Container from 'components/Container'
import Button from 'components/Button'
import SafeAreaView from 'components/SafeAreaView'
import ListItem from 'components/ListItem'
import { data, filterOptionDefaults } from './data'
import FilterList from './partials/FilterList'

LogBox.ignoreLogs(['VirtualizedLists should never be nested'])

const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout)
  })
}

const Home = () => {
  const theme = useTheme()
  const insets = useSafeAreaInsets()

  const [refreshing, setRefreshing] = React.useState(false)
  // eslint-disable-next-line no-unused-vars
  const [filterOptions, setFilterOptions] = React.useState(filterOptionDefaults)
  const [filterOption, setFilterOption] = React.useState({ categories: [], dietary: [], price: [] })
  const handleResetClick = React.useCallback(
    (name) => {
      // reset any of arraies if matches name
      setFilterOption((prevFilterOption) => {
        if (name in filterOption) {
          return { ...prevFilterOption, [name]: [] }
        }
        return prevFilterOption
      })
    },
    [filterOption],
  )

  const handleFilterChange = React.useCallback((name, optionLabel) => {
    setFilterOption((prevFilter) => {
      const newFilteredItems = [...prevFilter[name]]
      const optionIdx = newFilteredItems.indexOf(optionLabel)
      if (optionIdx === -1) {
        // not there, add it
        newFilteredItems.push(optionLabel)
      } else {
        // already there, remove it
        newFilteredItems.splice(optionIdx, 1)
      }

      return { ...prevFilter, [name]: newFilteredItems }
    })
  }, [])

  const [showModal, hideModal] = useModal(
    () => (
      <FilterList
        filters={filterOptions}
        filterOption={filterOption}
        handleFilterChange={handleFilterChange}
        handleResetClick={handleResetClick}
        handleModalHide={hideModal}
      />
    ),
    [filterOption],
  )

  const onRefresh = React.useCallback(() => {
    setRefreshing(true)

    wait(2000).then(() => setRefreshing(false))
  }, [])

  return (
    <SafeAreaView edges={['top']}>
      <Header
        centerComponent={
          <Flex align="center">
            <Typography color="success" variant="body1" gutterBottom>
              Delivery to
            </Typography>
            <Typography component={ListItem} color="dark" variant="h6">
              San Francisco
            </Typography>
          </Flex>
        }
        rightComponent={
          <Button variant="text" disableUppercase onPress={showModal}>
            Filters
          </Button>
        }
        // eslint-disable-next-line react-native/no-inline-styles
        containerStyle={{
          borderBottomColor: '#f2f2f2',
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
          <ResturantList title="Featured Partners" data={data} horizontal />
          <Promo
            local
            heading="Free Delivery for 1 Month!"
            media={require('../../../assets/images/Banner.png')}
            text="You’ve to order at least $10 for using free delivery for 1 month."
          />
          <ResturantList title="Best Picks Restaurants by team" data={data} horizontal />
          <ResturantList
            title="All Restaurants"
            data={data}
            animated={false}
            snapToInterval={false}
          />
        </Container>
      </ScrollView>
    </SafeAreaView>
  )
}

export default React.memo(Home)
