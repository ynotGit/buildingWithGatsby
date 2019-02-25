import React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'
      
import Layout from '../components/layout'
import '../styles/main.scss'
      
const BlogHome = ({data}) => (
    <Layout>
    {data.allMarkdownRemark.edges.map(post => (
        <Link 
          key={post.node.id}
          to={post.node.frontmatter.path} 
        >
          {post.node.frontmatter.title}
        </Link>
      ))}  
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

export default BlogHome