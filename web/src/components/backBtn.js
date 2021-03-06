import React from 'react'
import styled from 'styled-components'
import {useMediaPredicate} from 'react-media-hook'

export const backBtn = () => {
  const matches = useMediaPredicate('(min-width: 768px)')

  return (
    <StyledBackBtn className='return'>
      <a href='https://www.eddiecleary.com'>
        <svg
          viewBox='0 0 32 32'
          height='32'
          width='32'
          version='1.1'>
          <path
            id='path4'
            d='m 0.111,16.037 c 0,2.903 0.715,5.58 2.146,8.031 1.431,2.451 3.372,4.392 5.823,5.823 2.451,1.431 5.128,2.146 8.031,2.146 2.903,0 5.58,-0.715 8.031,-2.146 2.451,-1.431 4.392,-3.372 5.823,-5.823 1.431,-2.451 2.146,-5.128 2.146,-8.031 0,-2.903 -0.715,-5.58 -2.146,-8.031 C 28.534,5.555 26.593,3.614 24.142,2.183 21.691,0.752 19.014,0.037 16.111,0.037 13.208,0.037 10.531,0.752 8.08,2.183 5.629,3.614 3.688,5.555 2.257,8.006 0.826,10.457 0.111,13.134 0.111,16.037 Z'
            fill='#18A0FB' />
          <path
            id='path6'
            d='m 5.282,15.95 c 0,0.375 0.125,0.688 0.375,0.938 l 9.438,9.438 c 0.25,0.25 0.563,0.375 0.938,0.375 0.375,0 0.688,-0.125 0.938,-0.375 l 1.896,-1.896 c 0.25,-0.25 0.375,-0.563 0.375,-0.938 0,-0.375 -0.125,-0.688 -0.375,-0.938 l -3.938,-3.938 h 10.458 c 0.361,0 0.674,-0.132 0.938,-0.396 0.264,-0.264 0.396,-0.576 0.396,-0.938 v -2.667 c 0,-0.361 -0.132,-0.674 -0.396,-0.938 -0.264,-0.264 -0.576,-0.396 -0.938,-0.396 H 14.929 l 3.938,-3.938 c 0.264,-0.264 0.396,-0.576 0.396,-0.938 0,-0.362 -0.132,-0.674 -0.396,-0.938 L 16.971,5.571 c -0.25,-0.25 -0.563,-0.375 -0.938,-0.375 -0.375,0 -0.688,0.125 -0.938,0.375 l -9.438,9.438 c -0.25,0.25 -0.375,0.563 -0.375,0.938 z'
            fill='#2D3033' />
        </svg><span id='back'>{!matches ? `Back` : `Back To eddiecleary.com`}</span></a>
    </StyledBackBtn>
  )
}

const StyledBackBtn = styled.div`
  padding: 15px;
  background-color: #2D3033;
  border-radius: 5px;
  z-index: 200;
  position: fixed;
  bottom: 10px;
  left: 10px;

  a {
    color: #18A0FB;
    display: flex;
    align-items: center;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

    svg {
      margin-right: 8px;
    }
  }
`

export default backBtn
