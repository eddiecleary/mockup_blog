// import React from 'react'
// import {graphql, useStaticQuery} from 'gatsby'
// import BlogCard from './blogCard'
// import '../scss/bloglist.scss'


// export const BlogList = ({featured}) => {
//   const data = useStaticQuery(query);
//   const featuredPost = data.featuredPosts.edges[0].node;

//   const items = [];

//   if (featured === true) {
//     let featuredPosts = data.featuredPosts.edges;
    
//     featuredPosts.map((post)=>{
//       items.push(
//         <BlogCard title={post.node.title} image={post.node.mainImage.asset.fluid} published={post.node.publishedAt} author={post.node.authors[0].author.name} category={post.node.categories[0].title} description={post.node._rawExcerpt} />
//       )
//       return items
//     })
//   } 

//   return (
//     <ul className="bloglist">
//       {items}
//     </ul>

//   )
// }

// export const query = graphql`
//   query {
//     featuredPosts: allSanityPost(filter: {featured: {eq: true}} limit: 3){
//       edges {
//         node {
//           title
//           featured
//           authors{
//             author {
//               name
//             }
//           }
//           publishedAt
//           categories{
//             title
//           }
//           mainImage{
//             asset{              
//             }
//           }
//           _rawExcerpt
//         }
//       }
//     }
//   }
// `

// export default BlogList
