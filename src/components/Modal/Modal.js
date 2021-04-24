import * as React from 'react'
import PropTypes from 'prop-types'
import { Modal as RNModal } from 'react-native'
import Header from 'components/Header'
import Container from 'components/Container'
import SafeAreaView from 'components/SafeAreaView'
import { nodeType } from 'utils'

const Modal = (props) => {
  const { children, leftComponent, centerComponent, rightComponent, ...other } = props

  return (
    <RNModal animationType="slide" transparent {...other}>
      <SafeAreaView edges={['top']}>
        <Header
          leftComponent={leftComponent}
          centerComponent={centerComponent}
          rightComponent={rightComponent}
        />
        <Container>{children}</Container>
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
