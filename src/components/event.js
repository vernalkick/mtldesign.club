import React from 'react'
import moment from 'moment'

export default ({ event, type, children }) => (
  <section className="event">
    <header className="event__header">
      <span class="event__number">{type}</span>
      <h2 className="event__date">{moment.utc(event.date).format("MMMM Do")}</h2>
      <span className="event__details">
        {event.time} @ <a href={event.location.url}>{event.location.name}</a> <a href={event.rsvp} className="event__rsvp external-link">RSVP</a>
      </span>
    </header>
    {children}
  </section>
)
