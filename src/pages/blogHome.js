import React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import CoverImage from 'gatsby-image'
import styled from 'styled-components'
      
import Layout from '../components/layout'
import '../styles/main.scss'

const BlogHomeWrapper = styled.section `
  width: 100%;
`

const BlogHomeContainer = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
`

const coverImage = styled.img `
  flex: 1;
  
`

      
const BlogHome = ({data}) => (
    <Layout>
        <SEO title="Blog Home" keywords={['blog']} />
        <BlogHomeWrapper>
          <BlogHomeContainer>
            {data.allMarkdownRemark.edges.map(post => (
            <Link 
              key={post.node.id}
              to={post.node.frontmatter.path} 
            >
              {post.node.frontmatter.date}
              <CoverImage fluid={post.node.frontmatter.coverImage.childImageSharp.fluid} />
              {post.node.frontmatter.title}
            </Link>
          ))}  
        </BlogHomeContainer>
      </BlogHomeWrapper>
    </Layout>
)
      
      
export const pageQuery = graphql`
  query BlogHomeQuery {
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
            coverImage {
              publicURL
              childImageSharp {
                fluid(maxWidth: 1240, maxHeight: 260 ) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default BlogHome