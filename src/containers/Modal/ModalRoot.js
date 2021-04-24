import React, { memo } from 'react'
import PropTypes from 'prop-types'

/**
 * Component responsible for rendering the modal.
 *
 * The identity of `Component` may change dependeing on the inputs passed to
 * `useModal`. If we simply rendered `<Component />` then the modal would be
 * susceptible to rerenders whenever one of the inputs change.
 */
const ModalRenderer = React.memo(({ component, ...rest }) => component(rest))

ModalRenderer.propTypes = {
  component: PropTypes.function,
}

/**
 * Modal Root
 *
 * Renders modals using react portal.
 */
export const ModalRoot = memo(({ modals }) => {
  return (
    <>
      {Object.keys(modals).map((key) => (
        <ModalRenderer key={key} component={modals[key]} />
      ))}
    </>
  )
})

ModalRoot.propTypes = {
  modals: PropTypes.object,
}
