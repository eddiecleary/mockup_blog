// import '../scss/components/_blogcard.scss'
import React from 'react'
import Img from 'gatsby-image'
import PortableText from '@sanity/block-content-to-react'
import { format, parseISO, formatISO } from 'date-fns'
import styled from 'styled-components'
import cn from 'classnames'
import {getFluidGatsbyImage, getFixedGatsbyImage} from 'gatsby-source-sanity'

export const BlogCard = ({imageId,title,author,publishedAt,category,excerpt,alt}) => {

console.log(category);

let color;

switch (category.toString().toLowerCase()) {
  case 'lifestyle':
    color = 'rgba(74, 156, 71, 0.55)';
    break;
  case 'food':
    color = 'rgba(231, 99, 86, 0.55)';
    break;
  case 'travel':
    color = 'rgba(25, 132, 181, 0.55)';
    break;
}

  return (
    <StyledBlogCard pewdiepie={color}>
      <div className="blog-card-img-wrap">
        <Img fluid={imageId} className={"blog-card-img"} alt={alt} width={500}/>
        <div className={`blog-card-category ${category.toString().toLowerCase()}`}>{category}</div>
      </div>
      <div className="blog-card-text-wrap">
        <header>
          <h4 className="blog-card-title">{title}</h4>
        </header>
        <div className="blog-card-excerpt">
          <PortableText blocks={excerpt} />
        </div>
        <footer className="blog-card-footer">
          <cite className="blog-card-author">By: {author}</cite>
          <time className="blog-card-date">
          {format(publishedAt, 'MMM Do, YYYY')}
          </time> 
        </footer>
      </div>
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

  &:hover {
    box-shadow: 2px 2px 8px ${props=>props.pewdiepie};
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

  .blog-card-category {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    padding: var(--space-sm) var(--space-lg);
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
    border: 1.5px solid var(--white);
    border-left: none;
    color: var(--white);
    text-transform: capitalize;
    text-align: center;
    font-size: var(--text-md);

    &.lifestyle {
      background-color: var(--lifestyle);
    }

    &.food {
      background-color: var(--food);
    }

    &.travel {
      background-color: var(--travel);
    }
  }

  .blog-card-text-wrap {
    padding: var(--space-lg);

    .blog-card-title {
      margin: 0;
      margin-top: var(--space-xxxs);
      font-size: var(--text-xl);
    }

    .blog-card-excerpt {
      margin: var(--space-md) 0;
    }

    .blog-card-footer {
      display: flex;
      justify-content: space-between;
  
      .blog-card-author {
        font-style: initial;
      }
  
      .blog-card-date {
  
      }
    }
  }
`

export default BlogCard
