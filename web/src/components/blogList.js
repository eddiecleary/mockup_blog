import React, {useEffect, useState } from 'react'
// import Anilink from 'gatsby-plugin-transition-link/AniLink'
import {graphql, useStaticQuery} from 'gatsby'
import BlogCard from './blogCard'
import styled from 'styled-components'
import { mapEdgesToNodes } from '../lib/helpers'


export const BlogList = ({posts, recentPosts}) => {
  let postNodes;

  if (recentPosts) {
    const {recentPosts} = useStaticQuery(getRecentPosts)
    postNodes = mapEdgesToNodes(recentPosts);
  } else {
    postNodes = posts;
  }

  console.log(postNodes);

  return (

    <StyledBlogList>

      {postNodes && 
        postNodes.map((post, index)=>(
          <BlogCard 
            title={post.title} 
            publishedAt={post.publishedAt} 
            excerpt={post._rawExcerpt}
            category={post.categories[0].title} 
            imageId={post.mainImage.asset.fluid}
            alt={post.mainImage.alt}
            key={post.id}
            slug={post.slug.current}
          />
        ))
      }

    </StyledBlogList>
  )
}

export const getRecentPosts = graphql`
  query{
    recentPosts: allSanityPost(sort: {fields: [publishedAt], order: ASC}, filter: {slug: {current: {ne: null}}, publishedAt: {ne: null}}, limit: 4) {
      edges {
        node {
          id
          publishedAt(formatString: "MMM Do YYYY")
          mainImage {
            alt
            asset {
              fluid(maxWidth: 500) {
                ...GatsbySanityImageFluid
              }
            }
          }
          title
          _rawExcerpt
          slug {
            current
          }
          categories {
            title
          }
        }
      }
    }
  }
`


const StyledBlogList = styled.ul`
  margin: 0 auto;
  padding: 0;

  @media (min-width: 992px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-right: var(--space-xxxs);
  }
`

export default BlogList
