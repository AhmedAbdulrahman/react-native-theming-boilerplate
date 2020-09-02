import * as React from 'react'
import { Text, View } from 'react-native'
import { useTheme } from 'styles/createTheme'

const Onboarding = () => {
  const theme = useTheme()

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.palette.error.dark,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
        }}
      >
        <Text
          style={{
            ...theme.typography.h1,
            fontFamily: theme.typography.fontFamilyPrimary.regular,
            color: theme.palette.warning.dark,
            flex: 1,
            flexShrink: 1,
          }}
        >
          Master React Native
        </Text>
      </View>
    </View>
  )
}

export default Onboarding
