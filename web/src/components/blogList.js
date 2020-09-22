import React, {useEffect, useState } from 'react'
// import Anilink from 'gatsby-plugin-transition-link/AniLink'
import {graphql, useStaticQuery} from 'gatsby'
import BlogCard from './blogCard'
import styled from 'styled-components'
import { mapEdgesToNodes } from '../lib/helpers'


export const BlogList = ({posts}) => {
  return (

    <StyledBlogList>

      {posts && 
        posts.map((post, index)=>(
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
