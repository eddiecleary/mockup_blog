// import '../scss/components/_bloglist.scss'
import React, {useEffect, useState } from 'react'
// import Anilink from 'gatsby-plugin-transition-link/AniLink'
import {graphql, useStaticQuery} from 'gatsby'
import BlogCard from './blogCard'
import sanityClient from '../lib/client.js'
import styled from 'styled-components'
import { mapEdgesToNodes } from '../lib/helpers'


export const BlogList = () => {
  const {recentPosts} = useStaticQuery(getRecentPosts)
  const postNodes = recentPosts && mapEdgesToNodes(recentPosts);


  return (

    <StyledBlogList>
      {postNodes && 
        postNodes.map((post, index)=>(
          <BlogCard 
            title={post.title} 
            publishedAt={post.publishedAt} 
            excerpt={post._rawExcerpt}
            author={post.authors[0].author.name}
            category={post.categories[0].title} 
            imageId={post.mainImage.asset.fluid}
            alt={post.mainImage.alt}
            key={post.id}
          />
        ))
      }
    </StyledBlogList>
  )
}

export const getRecentPosts = graphql`
  query {
    recentPosts: allSanityPost(sort: {fields: [publishedAt], order: ASC}, filter: {slug: {current: {ne: null}}, publishedAt: {ne: null}}, limit: 3) {
      edges {
        node {
          id
          publishedAt
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
          authors {
            author {
              name
            }
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
`

export default BlogList
