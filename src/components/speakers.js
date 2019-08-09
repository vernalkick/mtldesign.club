import React from 'react'
import Img from 'gatsby-image'

export default ({ speakers }) => {
  String.prototype.sanitize = function() {
    var s = this
    if (s.charAt(0) == '/') {
      s = s.substr(1)
    }
    return s
  }

  return (
    <main className="event__speakers">
      {speakers.map(speaker =>
        <div className="speaker" key={speaker.name}>
          <figure className="speaker__figure">
            <Img fluid={speaker.image.childImageSharp.fluid} />
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
}
