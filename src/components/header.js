import React from 'react'
import { Link } from 'gatsby'
import Peace from '../assets/images/svg/peace.svg'

const Header = ({ siteTitle }) => (
  <header className="header">
    <h1 className="event-name">
      <Link to="/">Montréal &mdash; <br/>Design Club</Link>
    </h1>
    <p className="event-description">A monthly event series highlighting some of the best designers of Montreal.</p>
    <div className="nav-link-list">
      <a href="mailto:kevin@kevinclark.ca" className="nav-link-list__item external-link">Contact us</a>
      <a href="/code-of-conduct" className="nav-link-list__item external-link">Code of conduct</a>
    </div>
    <Peace />
  </header>
)

export default Header
