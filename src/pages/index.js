import React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import '../styles/main.scss'
import SEO from '../components/seo'

import Landing from '../components/landing'
import Intro from '../components/intro'
import Services from '../components/services'


const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Landing />
    <Intro />
    <Services />

    <Link to="/page-2/">Go to page 2</Link>
    <br />
    <ul>
      {data.allMarkdownRemark.edges.map(post => (
        <li>
          <Link 
            key={post.node.id}
            to={post.node.frontmatter.path} 
          >
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
