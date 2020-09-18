import React from 'react'
import {graphql,useStaticQuery} from 'gatsby'
import Img from 'gatsby-image'
import styled, { keyframes } from 'styled-components'


export const SpinCircle = ({text,image,BGimage}) => {
  const data = useStaticQuery(query);

  return (
    <CircleWrap>
      <div className="circle-front">
        <Img fixed={data.spin_bg.childImageSharp.fixed} />
      </div>
      <div className="circle-mid">
        <Img className="rotateMe" fixed={BGimage} />
      </div>
      <div className="circle-bg">
        <Img fixed={image}/>
      </div>
      <h4 className="circle-text">{text}</h4>
    </CircleWrap>
  )
}

const rotation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const CircleWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  width: 250px;
  margin-bottom: var(--space-xl);
  
  @media(min-width: 768px) {
    flex-basis: 45%;
  }
  
  @media(min-width: 992px) {
    flex-basis: 33.3%;
  }

  .circle-front {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .circle-mid {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    .rotateMe {
      animation-name: ${rotation};
      animation-duration: 25s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
      will-change: transform;
    }
  }

  .circle-bg {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .circle-text {
    position: absolute;
    left: 50%;
    top: 100%;
    transform: translate(-50%, -50%);
    text-transform: capitalize;
    margin: 0;
    font-size: var(--text-lg);
    margin-top: var(--space-xs);
  }
`

export const query = graphql`
  query{
    spin_bg:file(relativePath:{eq:"images/spin_bg.png"}){
      childImageSharp{
        fixed(quality:60,width: 209, height: 209){
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default SpinCircle
