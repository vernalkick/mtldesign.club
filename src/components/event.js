import React from 'react'
import moment from 'moment'
import Speakers from '../components/speakers'
import Workshop from '../components/workshop'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

export default ({ event }) => (
  <section className="event">
    <header className="event__header">
      <span className="event__number">{event.type}</span>
      <h2 className="event__date">{moment.utc(event.date).format("MMMM Do")}</h2>
      <span className="event__details">
        <span className="event__location">{event.time} @ <a href={event.location.url}>{event.location.name}</a></span><OutboundLink href={event.rsvp} className="event__rsvp">Réservez votre place</OutboundLink>
      </span>
    </header>

    {event.speakers &&
      <Speakers speakers={event.speakers} />
    }

    {event.workshop &&
      <Workshop workshop={event.workshop} />
    }

  </section>
)
