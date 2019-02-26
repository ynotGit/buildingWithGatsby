import React from 'react'
import {Link} from 'gatsby'
import {StaticQuery, graphql} from 'gatsby'
import styled from 'styled-components'

const BlogWrapper = styled.section `
    height: 400px;
`

const BlogContainer = styled.section `
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const StyledLink = styled(Link) `
    flex: 1;
`


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
                }
              }
            }
          }
        }
      `}
        render={data => (
            <BlogWrapper>
                <BlogContainer>
                    {data.allMarkdownRemark.edges.map(post => (
                        <StyledLink 
                        key={post.node.id}
                        to={post.node.frontmatter.path} 
                        >
                        {post.node.frontmatter.date}
                        <br />
                        {post.node.frontmatter.title}
                        </StyledLink>
                    ))}  
                    <br />
                    <Link to="blogHome">More Posts</Link>
                </BlogContainer>
            </BlogWrapper>
        )}
    />
)

export default Blog