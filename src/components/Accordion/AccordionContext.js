import * as React from 'react'
import PropTypes from 'prop-types'
import Animated from 'react-native-reanimated'

const AccordionContext = React.createContext({
  expanded: new Animated.Value(0),
})

export const AccordionProvider = (props) => {
  const { children, value } = props
  return <AccordionContext.Provider value={value}>{children}</AccordionContext.Provider>
}

AccordionProvider.propTypes = {
  children: PropTypes.node,
  value: PropTypes.object,
}
export function useAccordionContext() {
  const context = React.useContext(AccordionContext)
  return context
}
