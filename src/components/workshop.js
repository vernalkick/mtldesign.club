import React from 'react'
import moment from 'moment'

export default ({ workshop }) => (
  <main class="workshop">
    <figure class="workshop__figure">
      <img src={'/images/' + workshop.image} alt="" class="workshop__image" />
    </figure>
    <div class="workshop__info">
      <strong class="workshop__name">{workshop.name}</strong>
      <span class="workshop__description" dangerouslySetInnerHTML={{ __html: workshop.description}}></span>
    </div>
  </main>
)
