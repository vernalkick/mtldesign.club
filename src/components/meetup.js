import React from 'react'
import moment from 'moment'

export default ({ event }) => (
  <main className="event__speakers">
    {event.speakers && event.speakers.map(speaker =>
      <div className="speaker" key={speaker.name}>
        <figure className="speaker__figure">
          <img src={'/images/' + speaker.image} className="speaker__image" alt={speaker.name + "'s picture"} />
        </figure>
        <div className="speaker__info">
          <strong className="speaker__name">{speaker.name}</strong>
          <span className="speaker__description">{speaker.title}</span>
        </div>
      </div>
    )}
  </main>
)
