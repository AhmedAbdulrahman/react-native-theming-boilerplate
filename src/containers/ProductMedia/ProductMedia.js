import * as React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import BaseMedia from 'components/Media'
import Fade from 'components/Fade'

const Media = styled(BaseMedia)({
  aspectRatio: String(2 / 3),
})

const ProductMedia = (props) => {
  const { onLoad, ...other } = props
  const [loaded, setLoaded] = React.useState(false)

  const handleLoad = React.useCallback(
    (e) => {
      setLoaded(true)
      if (onLoad) {
        onLoad(e)
      }
    },
    [onLoad],
  )

  return (
    <Fade in={loaded}>
      <Media onLoad={handleLoad} {...other} />
    </Fade>
  )
}

ProductMedia.propTypes = {
  onLoad: PropTypes.func,
}

export default ProductMedia
