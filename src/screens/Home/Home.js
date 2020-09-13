/* eslint-disable no-case-declarations */
import * as React from 'react'
import { SectionList, FlatList, View, Dimensions, Platform, StyleSheet } from 'react-native'
import Container from 'components/Container'
import Typography from 'components/Typography'
import { Routes } from 'navigation/Routes'
import Link from 'navigation/Link'
import { elevationShadowStyle } from 'utils'
import ProductCard from 'containers/ProductCard'
import { data } from './data'

const { width: windowWidth } = Dimensions.get('window')
const IMAGE_SIZE = windowWidth * 0.4
const SPACING = 10
const ITEM_SIZE = Platform.OS === 'ios' ? windowWidth * 0.72 : windowWidth * 0.74
const HERO_IMAGE_SIZE = windowWidth - SPACING * 2

export default function App() {
  const keyExtractor = React.useCallback((item) => item?.key, [])

  const renderListItem = React.useCallback(
    ({ item, index }) => (
      <View
        key={index}
        style={{
          marginRight: SPACING * 1.5,
        }}
      >
        <ProductCard
          product={item}
          MediaProps={{
            rounded: true,
            style: styles.normalMedia,
            shadowStyle: { ...elevationShadowStyle(9) },
          }}
        />
      </View>
    ),
    [],
  )
  const renderHeroItem = React.useCallback(
    ({ item, index }) => (
      <View key={index} style={{ width: ITEM_SIZE }}>
        <ProductCard
          isFeatured
          product={item}
          MediaProps={{
            rounded: true,
            shadowStyle: { ...elevationShadowStyle(9) },
            style: styles.heroMedia,
          }}
        />
      </View>
    ),
    [],
  )

  const renderSectionHeader = React.useCallback(
    ({ section, index }) => (
      <View key={index} style={styles.sectionHeader}>
        <Typography color="dark" variant="h6" gutterTop>
          {section.title}
        </Typography>

        {section.type === 'Normal' && (
          <Link
            to={Routes.SignUp}
            params={{ block: Routes.SignUp }}
            variant="body2"
            color="success"
          >
            Sell all
          </Link>
        )}
      </View>
    ),
    [],
  )

  const renderSection = React.useCallback(
    ({ section }) => (
      <FlatList
        data={section.sectionContent}
        horizontal
        keyExtractor={keyExtractor}
        renderItem={section.type === 'Hero' ? renderHeroItem : renderListItem}
        renderToHardwareTextureAndroid
        bounces={false}
        snapToAlignment="center"
        scrollEventThrottle={16}
        decelerationRate={Platform.OS === 'ios' ? 0 : 0.98}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ alignItems: section.type === 'Hero' ? 'flex-start' : 'center' }}
        // style={{ paddingHorizontal: SPACING, marginBottom: SPACING * 1 }}
      />
    ),
    [keyExtractor, renderHeroItem, renderListItem],
  )

  return (
    <Container>
      <SectionList
        sections={data}
        keyExtractor={keyExtractor}
        stickySectionHeadersEnabled={false}
        showsVerticalScrollIndicator={false}
        renderItem={renderSection}
        renderSectionHeader={renderSectionHeader}
      />
    </Container>
  )
}

const styles = StyleSheet.create({
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: SPACING,
    // paddingHorizontal: SPACING,
  },
  heroMedia: {
    width: HERO_IMAGE_SIZE * 0.72,
    height: ITEM_SIZE * 0.6,
    resizeMode: 'cover',
    margin: 0,
    marginBottom: 5,
  },
  normalMedia: {
    width: IMAGE_SIZE * 1.3,
    height: IMAGE_SIZE * 0.8,
  },
})
