import React from 'react'

import Event01 from '../data/event-images/picture-01.jpg'
import Event02 from '../data/event-images/picture-02.jpg'

export default ({ images }) => (
  <div className="photobook">
  {images.map(url =>
    <div className="photoframe">
      <img src={url} className="photoframe__image" />
    </div>
  )}
  </div>
)
