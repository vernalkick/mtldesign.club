import React from 'react'
import { graphql } from 'gatsby'

import Event from '../components/event'
import Layout from '../components/layout'
import Photobook from '../components/photobook'
import moment from 'moment'

class IndexPage extends React.Component {
  constructor(props) {
    super(props)

    // var allItems = [...this.props.data.allEventsYaml.edges, ...this.props.data.allWorkshopsYaml.edges]
    var allItems = [...this.props.data.allEventsYaml.edges]
        allItems = allItems.sort((a, b) => {
            return moment(b.node.date).isBefore(a.node.date)
          })
        // allItems = allItems.filter(edge => moment(edge.node.date).isSameOrAfter(moment(), 'day'))

    var images = this.props.data.allFile.edges.map(edge => edge.node.publicURL)

    this.state = {
      images: images,
      allItems: allItems
    }
  }

  render() {
    return (
      <Layout>
        {this.state.allItems.map(edge =>
          <Event event={edge.node} key={edge.node + Math.random()} />
        )}
        <div>
          <div className="section-header">
            <h2>Photos</h2>
            <p>Follow us on <a href="https://www.instagram.com/mtldesignclub/" class="external-link">Instagram</a></p>
          </div>
          <Photobook images={this.state.images} />
        </div>
      </Layout>
    )
  }

}

export const query = graphql`
  {
    allWorkshopsYaml(sort: { fields: [date], order: ASC }, filter: {visible: {eq: true}}) {
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
    allEventsYaml(sort: { fields: [date], order: ASC }, filter: {visible: {eq: true}}) {
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
