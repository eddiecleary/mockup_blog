import React from 'react'
import testimonials from '../constants/testimonials'
import {graphql, useStaticQuery} from 'gatsby'
import Img from 'gatsby-image'
import '../scss/testimonials.scss'
import {v4 as uuidv4} from 'uuid'

export const Testimonials = ({number}) => {
  const data = useStaticQuery(query);

  const items = [];

  for(var i = 0; i < number; i++) {
    items.push(
      <li className="testimonial__item">
        <blockquote key={uuidv4()} className="testimonial">
          <p className="testimonial__description">
            {testimonials[i].text}
          </p>
          <footer className="testimonial__footer">
            <div className="testimonial__nameWrap">
              <cite>{testimonials[i].name}</cite>
              <span>{testimonials[i].job}</span>
            </div>
            <Img fixed={data.testimonialImgs.edges[i].node.childImageSharp.fixed} />
          </footer>
        </blockquote>
      </li>
    );
  }

  return (
    <>
      <ul className="testimonial__list">
        {items}
      </ul>
    </>
  )
}

export const query = graphql`
  query{
    testimonialImgs:allFile(filter:{relativeDirectory:{eq:"images/testimonial"}}sort:{fields:name order:ASC}){
      edges{
        node{
          childImageSharp{
            fixed(quality:90, width: 54, height: 54) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`

export default Testimonials
