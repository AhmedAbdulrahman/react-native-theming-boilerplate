import * as React from 'react'
import { SafeAreaView } from 'react-native'

export default function Root(storyFn) {
  return <SafeAreaView style={{ flex: 1 }}>{storyFn()}</SafeAreaView>
}
