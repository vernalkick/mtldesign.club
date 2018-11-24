import React from 'react'
import { graphql } from 'gatsby'

import Event from '../components/event'
import Layout from '../components/layout'
import moment from 'moment'

const IndexPage = ({ data: {allEventsYaml, allWorkshopsYaml} }) => {
  const allItems = [...allEventsYaml.edges, ...allWorkshopsYaml.edges]
  allItems.sort((a, b) => {
    return a.node.date > b.node.date
  })

  return (
    <Layout>
      {allItems.map(edge =>
        !moment(edge.node.date).isBefore() &&
        <Event event={edge.node} key={edge.node} />
      )}
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
  }
`

export default IndexPage
