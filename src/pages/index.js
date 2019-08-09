import React from 'react'
import { graphql } from 'gatsby'

import Event from '../components/event'
import Layout from '../components/layout'
import Photobook from '../components/photobook'

class IndexPage extends React.Component {
  render() {
    const {allEventsYaml, allFile} = this.props.data;

    return (
      <Layout>
        {allEventsYaml.edges.map(edge =>
          <Event event={edge.node} key={edge.node + edge.node.date} />
        )}
        <div>
          <div className="section-header">
            <h2>Photos</h2>
            <p>Follow us on <a href="https://www.instagram.com/mtldesignclub/" class="external-link">Instagram</a></p>
          </div>
          <Photobook images={allFile.edges} />
        </div>
      </Layout>
    )
  }

}

export const query = graphql`
  {
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
              childImageSharp {
                fluid(maxWidth: 500) {
                  ...GatsbyContentfulFluid_withWebp
                }
              }
            }
            language
          }
          workshop {
            image {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyContentfulFluid_withWebp
                }
              }
            }
            description
            name
          }
        }
      }
    }
    allFile(filter: { extension: { eq: "jpg" }, dir: {regex: "/event-images/"} }, limit: 9, sort: { fields: [name], order: ASC }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`

export default IndexPage
