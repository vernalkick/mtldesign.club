import React from 'react'
import { withPrefix } from 'gatsby'

export default ({ event }) => (
  <main className="event__speakers">
    {event.speakers && event.speakers.map(speaker =>
      <div className="speaker" key={speaker.name}>
        <figure className="speaker__figure">
          <img src={withPrefix('/images/' + speaker.image)} className="speaker__image" alt={speaker.name + "'s picture"} />
        </figure>
        <div className="speaker__info">
          <strong className="speaker__name">{speaker.name}</strong>
          <span className="speaker__description">{speaker.title}</span>
          {speaker.language &&
            <span className="speaker__language">{speaker.language}</span>
          }
        </div>
      </div>
    )}
  </main>
)
