import React from 'react'
import Img from 'gatsby-image'
import '../scss/blogcard.scss'
import PortableText from '@sanity/block-content-to-react'
import { format, parseISO, formatISO } from 'date-fns'
import cn from 'classnames'

// import Anilink from 'gatsby-plugin-transition-link/Anilink'

export const BlogCard = ({title,author,published,category,image,description}) => {

  return (
    <article className="blogCard">
      <div className="blogCard__imageWrap">
        <Img className="blogCard__image" fluid={image} />
        <div className={`blogCard__category blogCard__category--${category.toString().toLowerCase()}`}>{category}</div>
      </div>
      <div className="blogCard__textWrap">
        <header>
          <h4 className="blogCard__title">{title}</h4>
        </header>
        <p className="blogCard__description">
          <PortableText blocks={description} />
        </p>
        <footer className="blogCard__footer">
          <cite className="blogCard__author">{author}</cite>
          <time className="blogCard__published">
            {format(parseISO(published), 'yyyy')}
          </time> 
        </footer>
      </div>
      
    </article>
  )
}

export default BlogCard
