import React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import Image from 'gatsby-image'
import styled from 'styled-components'
      
import Layout from '../components/layout'
import '../styles/main.scss'

const BlogHomeWrapper = styled.section `
 
`

const BlogHomeContainer = styled.div `
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin: 0 20px;
`

const BlogLink = styled(Link) `
    flex: 1 300px;
    padding: 20px;
`

const CoverImage = styled(Image) `
    align-self: flex-start;
`

      
const BlogHome = ({data}) => (
    <Layout>
        <SEO title="Blog Home" keywords={['blog']} />
        <BlogHomeWrapper>
          <BlogHomeContainer>
            {data.allMarkdownRemark.edges.map(post => (
            <BlogLink 
              key={post.node.id}
              to={post.node.frontmatter.path} 
            >
              {post.node.frontmatter.date}
              <CoverImage fluid={post.node.frontmatter.coverImage.childImageSharp.fluid} />
              {post.node.frontmatter.title}
            </BlogLink>
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
                fluid(maxWidth: 360 ) {
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