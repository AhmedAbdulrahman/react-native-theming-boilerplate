import * as React from 'react'

/**
 * Throw error when ModalContext is used outside of context provider
 */
const invariantViolation = () => {
  throw new Error(
    'Attempted to call useModal outside of modal context. Make sure your app is rendered inside ModalProvider.',
  )
}

/**
 * Modal Context Object
 */
export const ModalContext = React.createContext({
  showModal: invariantViolation,
  hideModal: invariantViolation,
})
