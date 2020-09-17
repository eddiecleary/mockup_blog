// import '../scss/components/_title.scss'
import React from 'react'
import styled, { keyframes, css } from 'styled-components'

export const Title = ({title,subtitle,headingLevel,color,animated}) => {

  if (headingLevel > 5 || headingLevel < 1) {
    throw new Error('Heading cannot be greater than 5 or less than 1');
  }
  const Tag = `h${headingLevel || 1}`;
  const Tag2 = `h${headingLevel + 1 || 2}`;

  return (
    <>
      <Tag className="title">
        {title}
        <Underline animated={animated} />
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
    transform: scaleX(0%);
  }

  12%{
    transform: scaleX(0%);
  }

  22%{
    transform: scaleX(100%);
  }

  85% {
    transform: scaleX(100%);
  }

  95% {
    transform: scaleX(0%);
  }

  100% {
    transform: scaleX(0%);
  }
`

const Underline = styled.span`
  width: 100%;
  position: absolute;
  height: 5px;
  background-color: var(--secondary-transparent);
  left: 0;
  bottom: -2px;
  border-radius: 8px;
  transform: scaleX(100%);
  animation: ${props => props.animated ? css`${grow} 9s ease infinite;` : ''};
`

export default Title