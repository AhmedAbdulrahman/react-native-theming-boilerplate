import * as React from 'react'

const AppContext = React.createContext({})

const AppProvider = (props) => {
  const { children } = props
  const [isLoading, setIsLoading] = React.useState(true)

  const context = React.useMemo(() => ({ isLoading, setIsLoading }), [])

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>
}

export const useApp = () => {
  return React.useContext(AppContext)
}

export default AppProvider
