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

const BlogPostContent = styled.div``

const Template = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <BlogPostContainer>
        <BlogPost>
          <BlogTitle>{frontmatter.title}</BlogTitle>
          <BlogDate>{frontmatter.date}</BlogDate>
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
      }
    }
  }
`

export default Template

//ES6: data undefined
// const { markdownRemark } = data // data.markdownRemark holds our post data
// const { frontmatter, html } = markdownRemark

// const Template = ({ data }) => (
//   <Layout>
//     <BlogPostContainer>
//       <BlogPost>
//         <BlogTitle>{frontmatter.title}</BlogTitle>
//         <BlogDate>{frontmatter.date}</BlogDate>
//         <BlogPostContent dangerouslySetInnerHTML={{ __html: html }} />
//       </BlogPost>
//     </BlogPostContainer>
//   </Layout>
// )

// export const pageQuery = graphql`
//   query($path: String!) {
//     markdownRemark(frontmatter: { path: { eq: $path } }) {
//       html
//       frontmatter {
//         date(formatString: "MMMM DD, YYYY")
//         path
//         title
//       }
//     }
//   }
// `

// export default Template
