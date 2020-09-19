import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Title from './title'

export const BlogHero = ({title, category, description, img, alt}) => {
  let color;

  switch (category.toString().toLowerCase()) {
    case 'lifestyle':
      color = '#4a9c47';
      break;
    case 'food':
      color = '#e76356';
      break;
    case 'travel':
      color = '#1984b5';
      break;
  }

  return (
    <StyledBlogHero>
      <div className="container">
        <div className="wrap">
          <div className="text-wrap">
            {/* <Title title={`${title} ${category}`} subtitle={`Read all of my ${category} posts below.`} color={color} /> */}
            <p className="hero-description">
              {description}
            </p>
          </div>
          <div className="image-wrap">
            <Img fluid={img} alt={alt} />
          </div>
        </div>
      </div>
    </StyledBlogHero>
  )
}

const StyledBlogHero = styled.section`

`

export default BlogHero
