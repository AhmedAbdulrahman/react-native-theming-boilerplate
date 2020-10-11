/* eslint-disable no-console */
import AsyncStorage from '@react-native-community/async-storage'

const STORAGE_KEY = 'SETTINGS'

const DEFAULT_SETTINGS = {
  theme: 'light',
}

export const loadSettings = async () => {
  try {
    const settings = await AsyncStorage.getItem(STORAGE_KEY)
    return settings != null ? JSON.parse(settings) : DEFAULT_SETTINGS
  } catch (error) {
    console.log('Error loading settings', error)
    return null
  }
}

export const saveSettings = async (settings) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(settings))
  } catch (error) {
    console.log('Error loading settings', error)
  }
}
