import React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Yo peeps</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <br />
    <ul>
      {data.allMarkdownRemark.edges.map(post => (
        <li>
          <Link 
            key={post.node.id}
            to={post.node.frontmatter.path} >
            {post.node.frontmatter.title}
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 10
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`

export default IndexPage
