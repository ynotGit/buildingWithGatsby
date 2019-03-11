import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'

const BlogPostContainer = styled.section`
  text-align: center;
`

const BlogPost = styled.div``

const BlogTitle = styled.h1`
  padding: 10px 0;
`

const BlogDate = styled.h2`
  margin: 10px 0;
`

const CoverImage = styled.img``

const BlogPostContent = styled.div``

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <BlogPostContainer>
        <BlogPost>
          <BlogTitle>{frontmatter.title}</BlogTitle>
          <BlogDate>{frontmatter.date}</BlogDate>
          <CoverImage fixed={frontmatter.coverImage.childImageSharp.fluid} />
          <BlogPostContent dangerouslySetInnerHTML={{ __html: html }} />
        </BlogPost>
      </BlogPostContainer>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        coverImage {
          publicURL
          childImageSharp {
            fixed(width: 1360, height: 400) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`
