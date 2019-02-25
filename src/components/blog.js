// import React from 'react'
// import {Link} from 'gatsby'
// import {graphql} from 'gatsby'
// import styled from 'styled-components'

// const BlogWrapper = styled.section `
//     width: 100%;
// `

// const BlogContainer = styled.section `
//     width: 100%;
// `


// const Blog = ({data}) => (
//     <BlogWrapper>
//         <BlogContainer>
//         <ul>
//       {data.allMarkdownRemark.edges.map(post => (
//         <li>
//           <Link 
//             key={post.node.id}
//             to={post.node.frontmatter.path} 
//           >
//             {post.node.frontmatter.title}
//           </Link>
//         </li>
//       ))}
//     </ul>
//         </BlogContainer>
//     </BlogWrapper>
// )

// export const pageQuery = graphql`
//   query IndexQuery {
//     allMarkdownRemark(
//       limit: 10
//       sort: { fields: [frontmatter___date], order: DESC }
//       filter: { frontmatter: { published: { eq: true } } }
//     ) {
//       edges {
//         node {
//           id
//           frontmatter {
//             title
//             path
//           }
//         }
//       }
//     }
//   }
// `

// export default Blog