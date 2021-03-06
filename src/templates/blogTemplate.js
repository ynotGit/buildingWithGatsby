import React from 'react'
import { graphql, Link } from 'gatsby'
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

const OtherPosts = styled.div`
  display: flex;
  margin: 20px 0;
`

const NextPost = styled.div`
  flex: 1;
`

const PrevPost = styled.div`
  flex: 1;
`

const Template = ({ data, pageContext }) => {
  const { next, prev } = pageContext
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
        <OtherPosts>
          <NextPost>
            {next && <Link to={next.frontmatter.path}>Next Post</Link>}
          </NextPost>
          <PrevPost>
            {prev && <Link to={prev.frontmatter.path}>Previous Post</Link>}
          </PrevPost>
        </OtherPosts>
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
