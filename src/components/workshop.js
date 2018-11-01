import React from 'react'
import moment from 'moment'

export default ({ workshop }) => (
  <main className="workshop">
    <figure className="workshop__figure">
      <img src={'/images/' + workshop.image} alt="" className="workshop__image" />
    </figure>
    <div className="workshop__info">
      <strong className="workshop__name">{workshop.name}</strong>
      <span className="workshop__description" dangerouslySetInnerHTML={{ __html: workshop.description}}></span>
    </div>
  </main>
)
