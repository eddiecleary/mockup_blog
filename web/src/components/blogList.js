// import '../scss/components/_bloglist.scss'
import React, {useEffect, useState } from 'react'
import Anilink from 'gatsby-plugin-transition-link/Anilink'
import {graphql, useStaticQuery} from 'gatsby'
import BlogCard from './blogCard'
import sanityClient from '../lib/client.js'
import styled from 'styled-components'


export const BlogList = () => {
  const [allPostsData, setAllPosts] = useState(null);

  useEffect(() => {
    sanityClient.fetch(
      `*[_type == "post"]|order(publishedAt) {
        title,
        publishedAt,
        mainImage,
        excerpt,
        "author": authors[0].author->{name},
        slug,
        "category": categories[0]->{title},
        "alt": mainImage.alt
      }[0...3]
      `
    )
    .then((data) => setAllPosts(data))
    .catch(console.error);
  }, []);

  return (
    <StyledBlogList>
      {allPostsData && 
        allPostsData.map((post, index)=>(
          <BlogCard 
            title={post.title} 
            publishedAt={post.publishedAt} 
            excerpt={post.excerpt}
            author={post.author.name}
            category={post.category.title} 
            imageId={post.mainImage.asset._ref}
            alt={post.mainImage.alt}
            key={index}
          />
        ))
      }
    </StyledBlogList>
  )
}

const StyledBlogList = styled.ul`
  margin: 0 auto;
  padding: 0;
`

export default BlogList
