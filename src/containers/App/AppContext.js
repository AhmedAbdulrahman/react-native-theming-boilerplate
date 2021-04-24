import * as React from 'react'
import PropTypes from 'prop-types'
import { loadSettings, saveSettings } from 'utils'

const AppContext = React.createContext({})
const AppHandlersContext = React.createContext({})

const AppProvider = (props) => {
  const { children } = props
  const [isLoading, setIsLoading] = React.useState(true)
  const [currentTheme, setCurrentTheme] = React.useState('light')

  const getSettings = React.useCallback(async () => {
    const settings = await loadSettings()

    if (settings?.theme) {
      setCurrentTheme(settings?.theme)
    } else {
      saveSettings({ theme: 'light' })
    }
  }, [])

  const onThemeToggle = React.useCallback(async () => {
    if (currentTheme === 'light') {
      setCurrentTheme('dark')
      await saveSettings({ theme: 'dark' })
    } else {
      setCurrentTheme('light')
      await saveSettings({ theme: 'light' })
    }
  }, [currentTheme])

  // Side effects
  React.useEffect(() => {
    getSettings()
  })

  const appHandlersContext = React.useMemo(() => ({ onThemeToggle, setIsLoading }), [
    onThemeToggle,
    setIsLoading,
  ])

  const appContext = { isLoading, currentTheme, ...appHandlersContext }

  return (
    <AppHandlersContext.Provider value={appHandlersContext}>
      <AppContext.Provider value={appContext}>{children}</AppContext.Provider>
    </AppHandlersContext.Provider>
  )
}

export const useApp = () => {
  return React.useContext(AppContext)
}

export const useAppHandlers = () => {
  return React.useContext(AppHandlersContext)
}

AppProvider.propTypes = {
  children: PropTypes.node,
}
export default AppProvider
