import * as React from 'react'
import PropTypes from 'prop-types'
import { TapGestureHandler } from 'react-native-gesture-handler'
import styled from 'styled-components'
import Animated, { Easing } from 'react-native-reanimated'
import { mix, withTransition } from 'react-native-redash'
import { useAccordionContext } from 'components/Accordion/AccordionContext'
import IconButton from 'components/IconButton'

const Root = styled(Animated.View)((props) => ({
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingVertical: props.theme.spacing(2),
}))

const Header = styled.View({})
const ExpandIcon = styled(Animated.View)({})

const AccordionHeader = React.forwardRef(function AccordionHeader(props, ref) {
  const { children, expandIcon = 'SmallArrowDown', IconButtonProps, ...other } = props
  const { expanded, gestureHandler } = useAccordionContext()

  const trans = withTransition(expanded, { easing: Easing.inOut(Easing.ease) })
  const rotateZ = mix(trans, 0, Math.PI)

  return (
    <TapGestureHandler {...gestureHandler}>
      <Root ref={ref} {...other}>
        <Header>{children}</Header>
        {expandIcon && (
          <ExpandIcon style={{ transform: [{ rotateZ }] }}>
            <IconButton icon={expandIcon} {...IconButtonProps} />
          </ExpandIcon>
        )}
      </Root>
    </TapGestureHandler>
  )
})

AccordionHeader.propTypes = {
  children: PropTypes.node,
  expandIcon: PropTypes.string,
  IconButtonProps: PropTypes.object,
}

export default React.memo(AccordionHeader)
