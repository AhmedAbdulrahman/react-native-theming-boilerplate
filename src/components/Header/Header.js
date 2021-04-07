/* eslint-disable no-nested-ternary */
import * as React from 'react'
import PropTypes from 'prop-types'
import { Platform, StyleSheet, View, ImageBackground, Image } from 'react-native'
import Constants from 'expo-constants'
import { useTheme } from 'styled-components'
import SvgIcon from 'components/SvgIcon'
import { renderNode, nodeType, ViewPropTypes } from 'utils'
import Typography from 'components/Typography'

const ALIGN_STYLE = {
  left: 'flex-start',
  right: 'flex-end',
  center: 'center',
}

const Children = ({ style, placement, children }) => (
  <View style={StyleSheet.flatten([{ alignItems: ALIGN_STYLE[placement] }, style])}>
    {children == null || children === false
      ? null
      : children.text
      ? renderNode(Typography, children.text, { numberOfLines: 1, ...children })
      : children.icon
      ? renderNode(SvgIcon, {
          ...children,
          icon: children.icon,
          color: children.color,
          containerStyle: StyleSheet.flatten([
            { alignItems: ALIGN_STYLE[placement] },
            children.containerStyle,
          ]),
        })
      : renderNode(Typography, children)}
  </View>
)

Children.propTypes = {
  placement: PropTypes.oneOf(['left', 'center', 'right']),
  style: ViewPropTypes.style,
  children: PropTypes.oneOfType([nodeType, PropTypes.node]),
}

const Header = (props) => {
  const {
    // statusBarProps,
    leftComponent,
    centerComponent,
    rightComponent,
    leftContainerStyle,
    centerContainerStyle,
    rightContainerStyle,
    backgroundColor,
    backgroundImage,
    backgroundImageStyle,
    containerStyle,
    placement,
    // barStyle,
    children,
    ...attributes
  } = props

  const theme = useTheme()
  return (
    <ImageBackground
      testID="headerContainer"
      {...attributes}
      style={StyleSheet.flatten([
        styles.container(theme),
        backgroundColor && { backgroundColor },
        containerStyle,
      ])}
      source={backgroundImage}
      imageStyle={backgroundImageStyle}
    >
      <Children
        style={StyleSheet.flatten([
          placement === 'center' && styles.rightLeftContainer,
          leftContainerStyle,
        ])}
        placement="left"
      >
        {(React.isValidElement(children) && children) || children[0] || leftComponent}
      </Children>

      <Children
        style={StyleSheet.flatten([
          styles.centerContainer,
          placement !== 'center' && {
            paddingHorizontal: Platform.select({
              android: 16,
              default: 15,
            }),
          },
          centerContainerStyle,
        ])}
        placement={placement}
      >
        {children[1] || centerComponent}
      </Children>

      <Children
        style={StyleSheet.flatten([
          placement === 'center' && styles.rightLeftContainer,
          rightContainerStyle,
        ])}
        placement="right"
      >
        {children[2] || rightComponent}
      </Children>
    </ImageBackground>
  )
}

Header.propTypes = {
  placement: PropTypes.oneOf(['left', 'center', 'right']),
  leftComponent: nodeType,
  centerComponent: nodeType,
  rightComponent: nodeType,
  leftContainerStyle: ViewPropTypes.style,
  centerContainerStyle: ViewPropTypes.style,
  rightContainerStyle: ViewPropTypes.style,
  backgroundColor: PropTypes.string,
  backgroundImage: PropTypes.object,
  backgroundImageStyle: Image.propTypes.style,
  containerStyle: ViewPropTypes.style,
  // statusBarProps: PropTypes.object,
  // barStyle: PropTypes.oneOf(['default', 'light-content', 'dark-content']),
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  theme: PropTypes.object,
}

Header.defaultProps = {
  placement: 'center',
  children: [],
}

const styles = {
  container: (theme) => ({
    // borderBottomColor: '#f2f2f2',
    borderBottomWidth: 0,
    paddingHorizontal: theme.spacing(2),
    backgroundColor: theme.palette.background.default.string(),
    // paddingTop: Constants.statusBarHeight,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height:
      Platform.select({
        android: 56,
        default: 56,
      }) +
      Constants.statusBarHeight * 0.2,
  }),
  centerContainer: {
    flex: 3,
  },
  rightLeftContainer: {
    flex: 1,
  },
}
export default Header
