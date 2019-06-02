import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'
import '../assets/styles.css'
import Banner from '../assets/images/banner.png'

class Layout extends React.Component {
  componentDidMount() {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on("init", user => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          })
        }
      })
    }
  }

  render() {
    return (
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
                { property: 'og:image', content: `${Banner}`},
                { name: 'description', content: 'A monthly event series highlighting some of the best designers of Montreal.'},
                { name: 'author', content: 'Kevin Clark'}
              ]}
            >
              <html lang="en" />
              <link href="https://fonts.googleapis.com/css?family=Space+Mono" rel="stylesheet" />
              <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
            </Helmet>
            <div className="container">
              <div className="wrap">
                <Header siteTitle={data.site.siteMetadata.title} />
                <main>
                  {this.props.children}
                </main>
                <Footer />
              </div>
            </div>
          </>
        )}
      />
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
