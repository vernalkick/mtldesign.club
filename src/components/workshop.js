import React from 'react'
import Img from 'gatsby-image'

export default ({ workshop }) => (
  <main className="workshop">
    <figure className="workshop__figure">
      <Img fluid={workshop.image.childImageSharp.fluid} />
    </figure>
    <div className="workshop__info">
      <strong className="workshop__name">{workshop.name}</strong>
      <span className="workshop__description" dangerouslySetInnerHTML={{ __html: workshop.description}}></span>
    </div>
  </main>
)
