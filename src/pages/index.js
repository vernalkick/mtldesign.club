import React from 'react'
import { graphql } from 'gatsby'

import Meetup from '../components/meetup'
import Workshop from '../components/workshop'
import Event from '../components/event'
import Layout from '../components/layout'
import moment from 'moment'

const IndexPage = ({ data: {allEventsYaml, allWorkshopsYaml} }) => {
  const allItems = [...allEventsYaml.edges, ...allWorkshopsYaml.edges]
  const sortedItems = allItems.sort((a, b) => {
    
  })
//  const sortedItems = allItems.sort(function (a, b) -> number {
//    compare
//  })
  
  console.log(sortedItems)
  
  return (
    <Layout>
    
      {allItems.map(edge =>
        edge.node.speakers ? (
          <Event event={edge.node} type="Event" key={edge.node}>
            <Meetup event={edge.node} />
          </Event>
        ) : (
          <Event event={edge.node} type="Workshop" key={edge.node}>
            <Workshop workshop={edge.node} />
          </Event>
        )
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
