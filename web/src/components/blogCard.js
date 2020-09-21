import React from 'react'
import Img from 'gatsby-image'
import PortableText from '@sanity/block-content-to-react'
import styled from 'styled-components'
import { categoryToColor } from '../lib/helpers.js'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

export const BlogCard = ({imageId,title,publishedAt,category,excerpt,alt,slug}) => {

  const color = categoryToColor(category, 0.55);
  const colorOpaque = categoryToColor(category, 0.9);

  return (
    <StyledBlogCard color={color} colorOpaque={colorOpaque}>
      <div className="blog-card-img-wrap">
        <Img fluid={imageId} className={"blog-card-img"} alt={alt} width={500}/>
      </div>
      <div className="blog-card-text-wrap">
        <header>
          <h4 className="blog-card-title">{title}</h4>
        </header>
        <div className="blog-card-excerpt">
          <PortableText blocks={excerpt} />
        </div>
        <footer className="blog-card-footer">
          <span className="blog-card-category">{category.toString().toLowerCase()}</span>
          <time className="blog-card-date">
          {publishedAt}
          </time> 
        </footer>
      </div>
      <AniLink className="blog-card-link" fade to={`/blog/${category.toString().toLowerCase()}/${slug}`}></AniLink>
    </StyledBlogCard>
  )
}

const StyledBlogCard = styled.article`
  box-shadow: var(--mainShadow);
  border-radius: 20px;
  overflow: hidden;
  margin: var(--space-xl) 0;
  max-width: 450px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  box-shadow: 2px 2px 8px ${props=>props.color};
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    transform: scale(1.025);
  }

  @media (min-width: 992px) {
    flex-basis: 45%;
  }
  
  .blog-card-img-wrap {
    position: relative;

    .blog-card-img {
      height: 190px;

      @media(min-width: 768px) {
        height: 220px;
      }

      .gatsby-image-wrapper {
        height: 100%;
      }
    }
  }

  .blog-card-text-wrap {
    padding: var(--space-lg);
    display: flex;
    flex-direction: column;
    height: 100%;

    .blog-card-title {
      margin: 0;
      margin-top: var(--space-xxxs);
      font-size: var(--text-xl);
    }

    .blog-card-excerpt {
      margin: var(--space-md) 0;
      flex: 1;
    }

    .blog-card-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .blog-card-category {
        color: var(--white);
        background-color: ${props=> props.colorOpaque};
        text-transform: capitalize;
        padding: var(--space-xxxs) var(--space-md);
        border-radius: 10px;
      }
  
      .blog-card-author {
        font-style: initial;
      }
  
      .blog-card-date {
        
      }
    }
  }

  .blog-card-link {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`

export default BlogCard
