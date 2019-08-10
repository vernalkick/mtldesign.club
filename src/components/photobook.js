import React from 'react'
import Img from 'gatsby-image'

export default ({ images }) => (
  <div className="photobook">
    {images.map((edge, index) =>
      <div className={"photoframe " + "photoframe--" + index}>
        <Img fluid={edge.node.childImageSharp.fluid} className={"photoframe__image"} />
      </div>
    )}
  </div>
)
