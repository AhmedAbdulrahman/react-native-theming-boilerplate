import * as React from 'react'
import PropTypes from 'prop-types'
import { ModalRoot } from './ModalRoot'
import { ModalContext } from './ModalContext'

/**
 * Modal Provider
 *
 * Provides modal context and renders ModalRoot.
 */
export const ModalProvider = ({ children }) => {
  const [modals, setModals] = React.useState({})
  const showModal = React.useCallback(
    (key, modal) =>
      setModals((prevModals) => ({
        ...prevModals,
        [key]: modal,
      })),
    [],
  )
  const hideModal = React.useCallback(
    (key) =>
      setModals((prevModals) => {
        const newModals = { ...prevModals }
        delete newModals[key]
        return newModals
      }),
    [],
  )
  const contextValue = React.useMemo(() => ({ showModal, hideModal }), [showModal, hideModal])

  return (
    <ModalContext.Provider value={contextValue}>
      <>
        {children}
        <ModalRoot modals={modals} />
      </>
    </ModalContext.Provider>
  )
}

ModalProvider.propTypes = {
  children: PropTypes.node,
}
