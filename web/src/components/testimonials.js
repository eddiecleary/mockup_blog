// import '../scss/components/_testimonials.scss'
import React from 'react'
import testimonials from '../constants/testimonials'
import {graphql, useStaticQuery} from 'gatsby'
import Img from 'gatsby-image'
import {v4 as uuidv4} from 'uuid'
import styled from 'styled-components'
import {BsChatQuote} from 'react-icons/bs'

export const Testimonials = ({number}) => {
  const data = useStaticQuery(query);

  const items = [];

  for(var i = 0; i < number; i++) {
    items.push(
      <li key={i} className="testimonial-list-item">
        <blockquote key={uuidv4()} className="testimonial">
          <p className="testimonial-text">
            {testimonials[i].text}
          </p>
          <footer className="testimonial-footer">
            <BsChatQuote className="testimonial-icon"/>
            <div className="testimonial-author-wrap">
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
    <StyledTestimonials>
      {items}
    </StyledTestimonials>
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

const StyledTestimonials = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;

  .testimonial-list-item {
    
    :nth-child(odd) {
      .testimonial {
        background-color: var(--primary-transparent);
      }
    }

    :nth-child(even) {
      .testimonial {
        background-color: var(--travel-transparent);
      }
    }

    :not(:last-child) {
      margin-bottom: 4rem;
    }
  }

  .testimonial {
    padding: 1.05rem;
    margin: 0 auto;
    border: none;
    border-radius: 20px;
    box-shadow: var(--mainShadow);
    font-size: 1rem;
    text-align: center;
    max-width: 350px;
  }

  .testimonial-text {
    font-size: var(--text-lg);
  }

  .testimonial-footer {
    display: flex;
    justify-content: flex-end;
    margin-top: 2rem;
    align-items: center;

    .testimonial-icon {
      flex: 1;
      justify-self: start;
      height: 43px;
      fill: lightgrey;
    }

    .testimonial-author-wrap {
      display: flex;
      flex-direction: column;
      margin-right: 1rem;
      align-items: center;
      justify-content: space-around;

      cite {
        font-style: inherit;
        font-size: var(--text-md);
        font-weight: bold;
        letter-spacing: 0.5px;
      }

      span {
        font-size: var(--text-sm);
        letter-spacing: 1.2px;
      }
    }
  }


`

export default Testimonials
