import * as React from 'react'
import { ModalContext } from './ModalContext'

/**
 * Utility function to generate unique number per component instance
 */
const generateModalKey = (() => {
  let count = 0

  // eslint-disable-next-line no-plusplus
  return () => `${++count}`
})()

/**
 * Check whether the argument is a stateless component.
 *
 * We take advantage of the stateless nature of functional components to be
 * inline the rendering of the modal component as part of another immutable
 * component.
 *
 * This is necessary for allowing the modal to update based on the inputs passed
 * as the second argument to useModal without unmounting the previous version of
 * the modal component.
 */
const isFunctionalComponent = (Component) => {
  const prototype = Component.prototype

  return !prototype || !prototype.isReactComponent
}

/**
 * React hook for showing modal windows
 */
export const useModal = (component, inputs = []) => {
  if (!isFunctionalComponent(component)) {
    throw new Error(
      'Only stateless components can be used as an argument to useModal. You have probably passed a class component where a function was expected.',
    )
  }

  const key = React.useMemo(generateModalKey, [])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const modal = React.useMemo(() => component, inputs)
  const context = React.useContext(ModalContext)

  const [isShown, setShown] = React.useState(false)
  const showModal = React.useCallback(() => setShown(true), [])
  const hideModal = React.useCallback(() => setShown(false), [])

  React.useEffect(() => {
    if (isShown) {
      context.showModal(key, modal)
    } else {
      context.hideModal(key)
    }

    // Hide modal when parent component unmounts
    return () => context.hideModal(key)
  }, [modal, isShown, context, key])

  return [showModal, hideModal]
}
