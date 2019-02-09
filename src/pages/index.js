import React from 'react'
import { graphql } from 'gatsby'

import Event from '../components/event'
import Layout from '../components/layout'
import Photobook from '../components/photobook'
import moment from 'moment'

class IndexPage extends React.Component {
  constructor(props) {
    super(props)

    var allItems = [...this.props.data.allEventsYaml.edges, ...this.props.data.allWorkshopsYaml.edges]
        allItems = allItems.sort((a, b) => {
            return moment(b.node.date).isBefore(a.node.date)
          })
        allItems = allItems.filter(edge => moment(edge.node.date).isSameOrAfter(moment(), 'day'))

    this.state = {
      test: 'world!',
      allItems: allItems
    }
  }

  render() {
    return (
      <Layout>
        {this.state.allItems.map(edge =>
          <Event event={edge.node} key={edge.node + Math.random()} />
        )}
      </Layout>
    )
  }

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
