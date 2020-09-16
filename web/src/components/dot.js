// import React from 'react'
import styled from 'styled-components'

const Dot = styled.div`
  height: 9px;
  width: 9px;
  border-radius: 50%;
  background-color: ${props => props.color};
  display: inline-block;
  position: absolute;
  transform: translateX(-200%);
  transition: transform var(--mainTransition);
`

export default Dot
