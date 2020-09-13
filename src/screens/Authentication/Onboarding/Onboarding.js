import * as React from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet, Dimensions } from 'react-native'
import { interpolateColor, useScrollHandler } from 'react-native-redash'
import Animated, { multiply, divide } from 'react-native-reanimated'
import { useTheme } from 'styled-components'
import { Routes } from 'navigation/Routes'
import Dot from './Dot'
import Slide from './Slide'
import SubSlide from './SubSlide'
import slides from './data'

const { width, height } = Dimensions.get('window')
const SLIDE_HEIGHT = 0.85 * height

const Onboarding = ({ navigation }) => {
  const theme = useTheme()
  const { scrollHandler, x } = useScrollHandler()
  const scrollRef = React.useRef(null)

  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, i) => i * width),
    outputRange: slides.map((slide) => slide.color),
  })

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme.palette.background.default.rgb().string() },
      ]}
    >
      <View style={styles.sliderContainer}>
        <Animated.View style={[styles.slider, { backgroundColor }]}>
          <Animated.ScrollView
            ref={scrollRef}
            horizontal
            snapToInterval={width}
            decelerationRate="fast"
            showsHorizontalScrollIndicator={false}
            {...scrollHandler}
          >
            {slides.map((slide, index) => (
              <Slide key={index} theme={theme} {...slide} />
            ))}
          </Animated.ScrollView>
        </Animated.View>
      </View>
      <View style={styles.footer}>
        <Animated.View style={{ ...StyleSheet.absoluteFillObject }} />
        <View style={[styles.footerContent]}>
          <View style={styles.pagination}>
            {slides.map((_, index) => (
              <Dot key={index} currentIndex={divide(x, width)} {...{ index }} />
            ))}
          </View>
          <Animated.View
            style={[
              styles.subslideContainer,
              { width: width * slides.length, transform: [{ translateX: multiply(x, -1) }] },
            ]}
          >
            {slides.map(({ title, description }, index) => {
              const last = index === slides.length - 1
              return (
                <SubSlide
                  key={index}
                  onPress={() => {
                    if (last) {
                      navigation.navigate(Routes.SignIn)
                    } else {
                      scrollRef.current
                        ?.getNode()
                        .scrollTo({ x: width * (index + 1), animated: true })
                    }
                  }}
                  {...{ title, description, x, last }}
                />
              )
            })}
          </Animated.View>
        </View>
      </View>
    </View>
  )
}

Onboarding.propTypes = {
  navigation: PropTypes.object,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sliderContainer: {
    flex: 1.8,
  },
  slider: {
    alignItems: 'center',
    height: SLIDE_HEIGHT / 2,
    width: SLIDE_HEIGHT / 2,
    borderRadius: 300,
    transform: [{ translateY: height / 2 - 300 }, { translateX: width / 2 - 170 }],
    // overflow: 'hidden',
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    flex: 1,
    backgroundColor: 'white',
  },
  subslideContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  pagination: {
    ...StyleSheet.absoluteFillObject,
    height: 75,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default Onboarding
