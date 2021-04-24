import * as React from 'react'
import PropTypes from 'prop-types'
import { SectionList, RefreshControl } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import styled, { useTheme } from 'styled-components'
import ProductFlatList from 'containers/ProductFlatList'
import Link from 'navigation/Link'
import { Routes } from 'navigation/Routes'
import Typography from 'components/Typography'
import Container from 'components/Container'

const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout)
  })
}

const SectionHeader = styled.View((props) => {
  return {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: props.theme.spacing(),
    marginBottom: props.theme.spacing(),
  }
})

const ProductGridSection = (props) => {
  const { products, ...other } = props
  const theme = useTheme()
  const insets = useSafeAreaInsets()

  const [refreshing, setRefreshing] = React.useState(false)
  const keyExtractor = React.useCallback((item) => item?.key, [])

  const onRefresh = React.useCallback(() => {
    setRefreshing(true)

    wait(2000).then(() => setRefreshing(false))
  }, [])

  const renderSection = React.useCallback(
    ({ section }) => <ProductFlatList section={section} keyExtractor={keyExtractor} horizontal />,
    [keyExtractor],
  )

  const renderSectionHeader = React.useCallback(
    ({ section }) => (
      <SectionHeader key={section}>
        <Typography color="dark" variant="subhead" gutterTop>
          {section.title}
        </Typography>
        {section.type === 'normal' && (
          <Link
            to={Routes.SignUp}
            params={{ block: Routes.SignUp }}
            variant="body2"
            color="success"
          >
            Sell all
          </Link>
        )}
      </SectionHeader>
    ),
    [],
  )

  return (
    <Container>
      <SectionList
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={theme.palette.text.primary.rgb().string()}
          />
        }
        style={{
          paddingTop: (insets.top / 2) * 0.3,
        }}
        sections={products}
        renderItem={renderSection}
        renderSectionHeader={renderSectionHeader}
        keyExtractor={keyExtractor}
        stickySectionHeadersEnabled={false}
        showsVerticalScrollIndicator={false}
        {...other}
      />
    </Container>
  )
}

ProductGridSection.propTypes = {
  products: PropTypes.array,
}

export default React.memo(ProductGridSection)
