import React from 'react'
import BlogCard from './blogCard'
import styled from 'styled-components'

export const BlogList = ({posts}) => {
  return (

    <StyledBlogList>

      {posts &&
        posts.map((post, index) => (
          <li>
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
          </li>
        ))
      }

    </StyledBlogList>
  )
}

const StyledBlogList = styled.ul`
  margin: 0 auto;
  padding: 0;
  list-style: none;

  @media (min-width: 992px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-right: var(--space-xxxs);
  }
`

export default BlogList
