import * as React from 'react'
import Header from 'components/Header'
import ProductGridSection from 'containers/ProductGridSection'
import { useModal } from 'containers/Modal'
import Typography from 'components/Typography'
import Flex from 'components/Flex'
import Button from 'components/Button'
import SafeAreaView from 'components/SafeAreaView'
import ListItem from 'components/ListItem'
import { data, filterOptionDefaults } from './data'
import FilterList from './partials/FilterList'

const Home = () => {
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
      <ProductGridSection products={data} />
    </SafeAreaView>
  )
}

export default React.memo(Home)
