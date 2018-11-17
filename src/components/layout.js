import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'
import '../assets/styles.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { property: 'og:title', content: 'Montréal Design Club' },
            { property: 'og:description', content: 'A monthly event series highlighting some of the best designers in Montréal.' },
            { property: 'og:image', content: 'http://mtldesign.club/assets/images/banner.png'},
            { name: 'description', content: 'A monthly event series highlighting some of the best designers of Montreal.'},
            { name: 'author', content: 'Kevin Clark'}
          ]}
        >
          <html lang="en" />
          <link href="https://fonts.googleapis.com/css?family=Space+Mono" rel="stylesheet" />
        </Helmet>
        <div className="container">
          <div className="wrap">
            <Header siteTitle={data.site.siteMetadata.title} />
            <main>
              {children}
            </main>
            <Footer />
          </div>
        </div>

      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
