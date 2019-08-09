import React from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'
import { Parallax } from 'react-scroll-parallax'

export default ({ images }) => (
    <div className="photobook">
      {images.map((edge, index) =>
          <div className={"photoframe " + "photoframe--" + index}>
            <img src={edge.node.publicURL} className={"photoframe__image " + "photoframe__image--" + index} />
          </div>
      )}
    </div>

    // <ParallaxProvider>
    //   <div className="photobook">
    //     {images.map((url, index) =>
    //       <Parallax offsetYMax={20 * Math.floor(Math.random() * 3) + 1 } offsetYMin={-20} slowerScrollRate tag="div" key={url}>
    //         <div className={"photoframe " + "photoframe--" + index}>
    //           <img src={url} className={"photoframe__image " + "photoframe__image--" + index} />
    //         </div>
    //       </Parallax>
    //     )}
    //   </div>
    // </ParallaxProvider>
)
