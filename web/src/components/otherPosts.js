import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

export const otherPosts = ({category, id}) => {
  console.log(category, id);
  const otherPostsResult = useStaticQuery(otherPostsQuery);
  console.log(otherPostsResult);

  return (
    <div>
      hello world
    </div>
  )
}

const otherPostsQuery = graphql`
query {
  allSanityPost(limit: 3, filter: {categories: {elemMatch: {title: {eq: "Food"}}}, _id: {ne: "460477da-2c81-4f89-bd7a-a119a4e5e81b"}}) {
    edges {
      node {
        title
        _id
      }
    }
  }
}
`

export default otherPosts 
