import * as React from 'react'
import PropTypes from 'prop-types'
import { loadSettings, saveSettings } from 'utils'

const AppContext = React.createContext({})
const AppHandlers = React.createContext({})

const AppProvider = (props) => {
  const { children } = props
  const [isLoading, setIsLoading] = React.useState(true)
  const [currentTheme, setCurrentTheme] = React.useState('light')

  const getSettings = React.useCallback(async () => {
    const localTheme = await loadSettings()

    if (localTheme) {
      setCurrentTheme(localTheme)
    } else {
      saveSettings({ theme: 'light' })
    }
  }, [])

  const onThemeToggle = React.useCallback(async () => {
    if (currentTheme === 'light') {
      setCurrentTheme('dark')
      saveSettings('dark')
    } else {
      setCurrentTheme('light')
      saveSettings('light')
    }
  }, [currentTheme])

  // Side effects
  React.useEffect(() => {
    getSettings()
  })

  const contextHandlers = React.useMemo(() => ({ onThemeToggle, setIsLoading }), [
    onThemeToggle,
    setIsLoading,
  ])

  const context = React.useMemo(() => ({ ...contextHandlers, isLoading, currentTheme }), [
    contextHandlers,
    isLoading,
    currentTheme,
  ])

  return (
    <AppContext.Provider value={context}>
      <AppHandlers.Provider value={contextHandlers}>{children}</AppHandlers.Provider>
    </AppContext.Provider>
  )
}

export const useApp = () => {
  return React.useContext(AppContext)
}

export const useAppHandlers = () => {
  return React.useContext(AppHandlers)
}

AppProvider.propTypes = {
  children: PropTypes.node,
}
export default AppProvider
