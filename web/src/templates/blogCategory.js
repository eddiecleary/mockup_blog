import React from 'react'
import { graphql } from 'gatsby'
import BlogHero from '../components/blogHero'
import styled from 'styled-components'
import Layout from '../components/layout'

console.log('idk');

export const BlogCategory = ({ pageContext }) => {
  console.log(pageContext);
  // console.log(pageContext.title);
  // const {title} = pageContext; 
  // const {description, categoryImage} = data.categoryInfo.edges[0].node;
  // console.log(description,categoryImage,title);
  return (
    <>
      <div>test</div>
    </>
  )
}

export default BlogCategory

// export const query = graphql`
//   query($title: String!) {
//     categoryPosts:allSanityPost(filter: {categories: {elemMatch: {title: {eq: $title}}}}) {
//       edges {
//         node {
//           id
//           title
//           mainImage {
//             alt
//             asset {
//               id
//             }
//           }
//           _rawExcerpt
//           _rawSlug
//           slug {
//             current
//           }
//           authors {
//             author {
//               name
//             }
//           }
//           publishedAt(formatString: "MMM Do YYYY")
//         }
//       }
//     }
//     categoryInfo:allSanityCategory(filter: {title: {eq: $title}}) {
//       edges {
//         node {
//           description
//           categoryImage {
//             alt
//             asset {
//               fluid(maxWidth: 500) {
//                 ...GatsbySanityImageFluid
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `

