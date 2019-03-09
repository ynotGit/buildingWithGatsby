import React from 'react'
import { Link } from 'gatsby'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

const BlogContainer = styled.section`
  padding: 10px 0;
  text-align: center;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const BlogLink = styled(Link)`
  flex: 1;
  padding: 20px;
`

const BlogHomeLink = styled(Link)`
  flex: 1;
`

const CoverImage = styled(Img)``

const Blog = () => (
  <StaticQuery
    query={graphql`
      query BlogQuery {
        allMarkdownRemark(
          limit: 3
          sort: { fields: [frontmatter___date], order: DESC }
          filter: { frontmatter: { published: { eq: true } } }
        ) {
          edges {
            node {
              id
              frontmatter {
                title
                path
                date
                coverImage {
                  publicURL
                  childImageSharp {
                    fluid(maxWidth: 360, maxHeight: 400) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <BlogContainer>
        {data.allMarkdownRemark.edges.map(post => (
          <BlogLink key={post.node.id} to={post.node.frontmatter.path}>
            <CoverImage
              fluid={post.node.frontmatter.coverImage.childImageSharp.fluid}
            />
            <br />
            {post.node.frontmatter.title}
            <br />
            {post.node.frontmatter.date}
          </BlogLink>
        ))}
        <BlogHomeLink to="blogHome">More Posts</BlogHomeLink>
      </BlogContainer>
    )}
  />
)

export default Blog
