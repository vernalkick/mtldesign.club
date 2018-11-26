import React from 'react'
import { graphql } from 'gatsby'

import Event from '../components/event'
import Layout from '../components/layout'
import Photobook from '../components/photobook'
import moment from 'moment'

const IndexPage = ({ data: {allEventsYaml, allWorkshopsYaml, allFile} }) => {
  const allItems = [...allEventsYaml.edges, ...allWorkshopsYaml.edges]
        allItems.sort((a, b) => {
          return a.node.date > b.node.date
        })

  const images = allFile.edges.flatMap(edge => edge.node.publicURL)

  return (
    <Layout>
      {allItems.map(edge =>
        !moment(edge.node.date).isBefore() &&
        <Event event={edge.node} key={edge.node} />
      )}
      <h2>Photos</h2>
      <p>Follow us on Instagram</p>
      <Photobook images={images} />
    </Layout>
  )
}

export const query = graphql`
  {
    allWorkshopsYaml(sort: { fields: [date], order: ASC }) {
      edges {
        node {
          date
          time
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
          date
          time
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
