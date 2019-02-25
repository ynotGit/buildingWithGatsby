import React from 'react'
import {Link} from 'gatsby'
import {StaticQuery, graphql} from 'gatsby'
import styled from 'styled-components'

const BlogWrapper = styled.section `
    width: 100%;
`

const BlogContainer = styled.section `
    width: 100%;
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
                        <Link 
                        key={post.node.id}
                        to={post.node.frontmatter.path} 
                        >
                        {post.node.frontmatter.title}
                        </Link>
                    ))}  
                    <Link to="blogHome">More Posts</Link>
                </BlogContainer>
            </BlogWrapper>
        )}
    />
)



export default Blog