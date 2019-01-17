import React from 'react'
import { graphql } from 'gatsby'

import Event from '../components/event'
import Layout from '../components/layout'
import Photobook from '../components/photobook'
import moment from 'moment'

const IndexPage = ({ data: {allEventsYaml, allWorkshopsYaml, allFile} }) => {
  const allItems = [...allEventsYaml.edges, ...allWorkshopsYaml.edges]
        allItems.sort((a, b) => {
          return b.node.date - a.node.date
        })

  const images = allFile.edges.map(edge => edge.node.publicURL)

  return (
    <Layout>
      {allItems.map(edge =>
        moment(edge.node.date).isSameOrAfter(moment(), 'day') &&
        <Event event={edge.node} key={edge.node} />
      )}
      <div />
      <section>
        <header className="section-header">
          <h2>Photos</h2>
          <p>Follow us on <a href="https://instagram.com/mtldesignclub" className="link external-link">Instagram</a></p>
        </header>
      </section>
      <Photobook images={images} />
    </Layout>
  )
}

export const query = graphql`
  {
    allWorkshopsYaml(sort: { fields: [date], order: ASC }) {
      edges {
        node {
          date(formatString: "YYYY-MM-DD")
          time
          type
          location {
            name
            url
          }
          rsvp
          image {
            publicURL
          }
          description
          name
        }
      }
    }
    allEventsYaml(sort: { fields: [date], order: ASC }) {
      edges {
        node {
          date(formatString: "YYYY-MM-DD")
          time
          type
          location {
            name
            url
          }
          rsvp
          speakers {
            name
            title
            image {
              publicURL
            }
            language
          }
        }
      }
    }
    allFile(filter: { extension: { eq: "jpg" }, dir: {regex: "/event-images/"} }, limit: 9, sort: { fields: [name], order: ASC }) {
      edges {
        node {
          publicURL
        }
      }
    }
  }
`

export default IndexPage
