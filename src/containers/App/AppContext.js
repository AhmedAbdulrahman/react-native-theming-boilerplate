import * as React from 'react'
import PropTypes from 'prop-types'

const AppContext = React.createContext({})
const AppHandlers = React.createContext({})

const AppProvider = (props) => {
  const { children } = props
  const [isLoading, setIsLoading] = React.useState(true)

  const contextHandlers = React.useMemo(() => ({ setIsLoading }), [setIsLoading])
  const context = React.useMemo(() => ({ ...contextHandlers, isLoading }), [
    contextHandlers,
    isLoading,
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
