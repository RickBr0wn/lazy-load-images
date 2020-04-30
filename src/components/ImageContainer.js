import React from 'react'
import PropTypes from 'prop-types'
import useIntersectionObserver from './useIntersectionObserver'

const ImageContainer = ({ height, width, src, alt }) => {
  const ref = React.useRef()
  const [isVisible, setIsVisible] = React.useState(false)

  useIntersectionObserver({
    target: ref,
    onIntersect: ([{ isIntersecting }], observerElement) => {
      if (isIntersecting) {
        setIsVisible(true)
        observerElement.unobserve(ref.current)
      }
    },
  })

  const aspectRatio = (height / width) * 100

  return (
    <div
      ref={ref}
      className="image-container"
      style={{ paddingBottom: `${aspectRatio}%` }}>
      {isVisible && <img className="image" src={src} alt={alt} />}
    </div>
  )
}

ImageContainer.propTypes = {
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
}

export default ImageContainer
