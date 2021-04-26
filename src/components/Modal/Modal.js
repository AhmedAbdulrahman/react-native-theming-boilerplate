import * as React from 'react'
import PropTypes from 'prop-types'
import { Modal as RNModal } from 'react-native'
import SafeAreaView from 'components/SafeAreaView'
import { nodeType } from 'utils'

const Modal = (props) => {
  const { children, leftComponent, centerComponent, rightComponent, ...other } = props

  return (
    <RNModal animationType="slide" transparent {...other}>
      <SafeAreaView edges={['top']} transparent>
        {children}
      </SafeAreaView>
    </RNModal>
  )
}

Modal.propTypes = {
  centerComponent: nodeType,
  children: PropTypes.node,
  leftComponent: nodeType,
  rightComponent: nodeType,
}

export default Modal
