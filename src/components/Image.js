import React from 'react'
import PropTypes from 'prop-types'

const Image = ({ alt, src, thumb }) => {
  const [isLoaded, setIsLoaded] = React.useState(false)

  return (
    <React.Fragment>
      <img
        className="image thumb"
        alt={alt}
        src={thumb}
        style={{
          visibility: isLoaded ? 'hidden' : 'visible',
        }}
      />
      <img
        onLoad={() => {
          setIsLoaded(true)
        }}
        className="image full"
        style={{ opacity: isLoaded ? 1 : 0 }}
        alt={alt}
        src={src}
      />
    </React.Fragment>
  )
}

Image.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string.isRequired,
  thumb: PropTypes.string.isRequired,
}

export default Image
