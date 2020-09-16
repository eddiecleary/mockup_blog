import React from 'react'
import {graphql,useStaticQuery} from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'


export const SpinCircle = ({text,image,BGimage}) => {
  const data = useStaticQuery(query);

  return (
    <CircleWrap>
      <CircleFront>
        <Img fixed={data.spin_bg.childImageSharp.fixed} />
      </CircleFront>
      <CircleMid>
        <Img className="rotateMe" fixed={BGimage} />
      </CircleMid>
      <CircleBG>
        <Img fixed={image}/>
      </CircleBG>
      <CircleText>{text}</CircleText>
    </CircleWrap>
  )
}

const CircleWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  width: 250px;
  margin-bottom: 2rem;
`

const CircleFront = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

const CircleMid = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

const CircleBG = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

const CircleText = styled.h4`
  position: absolute;
  left: 50%;
  top: 100%;
  transform: translate(-50%, -50%);
  text-transform: capitalize;
  margin: 0;
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
