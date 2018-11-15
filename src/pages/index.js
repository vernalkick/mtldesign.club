import React from 'react'
import { graphql } from 'gatsby'

import Meetup from '../components/meetup'
import Workshop from '../components/workshop'
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
    <p>Blabababa</p>
      {allItems.map(edge =>
        !moment(edge.node.date).isBefore() &&
        <Event event={edge.node} key={edge.node} />
      )}
      
      <h1>Past Events</h1>
      {allItems.map(edge =>
        moment(edge.node.date).isBefore() &&
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
          image
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
            image
          }
        }
      }
    }
  }
`

export default IndexPage
