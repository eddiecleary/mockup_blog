// import '../scss/components/_title.scss'
import React from 'react'
import styled, { keyframes } from 'styled-components'

export const Title = ({title,subtitle,headingLevel}) => {

  if (headingLevel > 5 || headingLevel < 1) {
    throw new Error('Heading cannot be greater than 5 or less than 1');
  }
  const Tag = `h${headingLevel || 1}`;
  const Tag2 = `h${headingLevel + 1 || 2}`;

  return (
    <>
      <Tag className="title">
        {title}
        <Underline/>
      </Tag>
      {subtitle && 
        <Tag2 className="subtitle">
          {subtitle}
        </Tag2> 
      }
    </>
  )
}

const grow = keyframes`
  0% {
    transform: scaleX(0);
  }

  12%{
    transform: scaleX(0);
  }

  22%{
    transform: scaleX(1);
  }

  85% {
    transform: scaleX(1);
  }

  95% {
    transform: scaleX(0);
  }

  100% {
    transform: scaleX(0);
  }
`

const Underline = styled.span`
  width: 100%;
  position: absolute;
  height: 5px;
  background-color: var(--food-transparent);
  left: 0;
  bottom: -2px;
  border-radius: 8px;
  animation: ${grow} 5s ease infinite;
  will-change: transform;
`

export default Title