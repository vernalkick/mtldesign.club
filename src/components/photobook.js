import React from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'
import { Parallax } from 'react-scroll-parallax'

import Event01 from '../data/event-images/picture-01.jpg'
import Event02 from '../data/event-images/picture-02.jpg'

export default ({ images }) => (
  <ParallaxProvider>
    <div className="photobook">
      {images.map((url, index) =>
        <Parallax offsetYMax={20 * Math.floor(Math.random() * 6) + 1 } offsetYMin={-20} slowerScrollRate tag="div">
          <div className={"photoframe " + "photoframe--" + index}>
            <img src={url} className={"photoframe__image " + "photoframe__image--" + index} />
          </div>
        </Parallax>
      )}
    </div>
  </ParallaxProvider>
)
