import * as React from 'react'
import PropTypes from 'prop-types'
import Media from 'components/Media'
import Fade from 'components/Fade'

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
