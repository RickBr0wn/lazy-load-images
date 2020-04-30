import React from 'react'
import images from './API'
import ImageContainer from './ImageContainer'

const App = () => {
  return (
    <div data-testid="app" className="app">
      <div className="container">
        {images.map(image => (
          <div key={image.id}>
            <ImageContainer
              src={image.urls.regular}
              thumb={image.urls.thumb}
              height={image.height}
              width={image.width}
              alt={image.alt_description}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
