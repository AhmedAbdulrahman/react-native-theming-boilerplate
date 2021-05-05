import * as React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, ActivityIndicator, Pressable, Platform } from 'react-native'
import styled, { useTheme } from 'styled-components'
import faker from 'faker'
import Link from 'navigation/Link'
import ScrollView from 'components/ScrollView'
import SafeAreaView from 'components/SafeAreaView'
import Container from 'components/Container'
import SvgIcon from 'components/SvgIcon'
import Typography from 'components/Typography'
import Spacing from 'components/Spacing'
import Header from 'components/Header'
import Button from 'components/Button'
import Media from 'containers/ProductMedia'
import IconHeader from 'components/IconHeader'
import { Routes } from 'navigation/Routes'
import Flex from 'components/Flex'

const response = [...Array(21).keys()].map((i) => ({
  key: `section-${i}`,
  title: faker.commerce.productName().substring(0, 15),
  address: `${faker.address.county()}, ${faker.address.country()}`.substring(0, 15),
  uri: `https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80`,
  delivery: 'Free',
  types: ['Chinese', 'American'],
  rating: '4.5',
  prepration: '25min',
}))

const Rating = styled.View((props) => ({
  position: 'absolute',
  right: 15,
  bottom: 20,
  backgroundColor: props.theme.palette.success.main.string(),
  padding: props.theme.spacing(0.4, 1.2),
  borderRadius: props.theme.spacing(1),
}))

const styles = StyleSheet.create({
  footerContainer: { position: 'absolute', bottom: 20, left: 15 },
})

const SearchResult = (props) => {
  const { route, navigation } = props
  const { text } = route.params

  const theme = useTheme()
  const ITEM_SIZE =
    Platform.OS === 'ios'
      ? theme.extras.constants.WINDOW_WIDTH * 0.45
      : theme.extras.constants.WINDOW_WIDTH * 0.74
  const [isLoading, setIsLoading] = React.useState(true)

  const handlePress = React.useCallback(
    (data) => {
      navigation.push(Routes.Product, { data })
    },
    [navigation],
  )

  // Fake Loading state
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <SafeAreaView edges={['top']}>
      <Header
        leftComponent={<IconHeader color="grey" />}
        centerComponent={
          <Typography color="dark" variant="body1">
            {text}
          </Typography>
        }
        rightComponent={
          <Button variant="text" disableUppercase>
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

      <Container flex={1}>
        <Spacing container fd="row" ai="center" jc="space-between" mt={3} mb={3}>
          <Typography color="dark" variant="body1">
            {`We have founds ${response.length} results of ${text}`}
          </Typography>
          <Link variant="body1" color="success" onPress={() => navigation.goBack()}>
            Search Again
          </Link>
        </Spacing>
        {isLoading ? (
          <Flex align="center" justify="center">
            <ActivityIndicator size="large" />
          </Flex>
        ) : (
          <ScrollView
            removeClippedSubviews
            nestedScrollEnabled
            showsVerticalScrollIndicator={false}
            columns={2}
            oddColumnStyle={{ top: theme.spacing(5) }}
          >
            {response.map((data, imageIndex) => (
              <Spacing key={data.key} container mb={1} mr={imageIndex % 2 === 0 ? 1.4 : 0}>
                <Spacing container>
                  <Pressable onPress={() => handlePress(data)} style={{ flex: 1 }}>
                    <Media uri={data.uri} withOverlay width={ITEM_SIZE} height={252} />
                  </Pressable>

                  <Spacing container style={styles.footerContainer}>
                    <Spacing container fd="row" ai="center">
                      <SvgIcon icon="Time" color={theme.palette.common.white.string()} />
                      <Typography color="textWhite" variant="body2">
                        {data.prepration}
                      </Typography>
                    </Spacing>

                    <Spacing container fd="row" ai="center" mt={1}>
                      <SvgIcon
                        icon="Delivery"
                        color={theme.palette.common.white.string()}
                        height={18}
                      />
                      <Typography color="textWhite" variant="body2">
                        {data.delivery}
                      </Typography>
                    </Spacing>
                  </Spacing>

                  <Rating>
                    <Typography color="textWhite" variant="body2">
                      4.3
                    </Typography>
                  </Rating>
                </Spacing>
                <Spacing container mt={2} mb={2}>
                  <Spacing container>
                    <Typography color="dark" variant="subhead">
                      {data.title}
                    </Typography>
                  </Spacing>
                  <Spacing container ffl="row wrap">
                    <Typography color="textSecondary" variant="subtitle">
                      {data.types?.join(' • ')}
                    </Typography>
                  </Spacing>
                </Spacing>
              </Spacing>
            ))}
          </ScrollView>
        )}
      </Container>
    </SafeAreaView>
  )
}

SearchResult.propTypes = {
  route: PropTypes.object,
  navigation: PropTypes.object,
}

export default React.memo(SearchResult)
