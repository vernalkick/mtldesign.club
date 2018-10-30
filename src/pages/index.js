import React from 'react'
import { graphql } from 'gatsby'

import Meetup from '../components/meetup'
import Workshop from '../components/workshop'
import Event from '../components/event'
import Layout from '../components/layout'
import moment from 'moment'

const IndexPage = ({ data: {allEventsYaml, allWorkshopsYaml} }) => (
  <Layout>
    {allEventsYaml.edges.map(edge =>
//      !moment(edge.node.date).isBefore() &&
      // moment(edge.node.date).isBefore('2010-10-21') != 'November 1st' &&
      <Event event={edge.node} type="Event" key={edge.node}>
        <Meetup event={edge.node} />
      </Event>
    )}
    {allWorkshopsYaml.edges.map(edge =>
      <Event event={edge.node} type="Workshop" key={edge.node}>
        <Workshop workshop={edge.node} />
      </Event>
    )}
  </Layout>
)

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
