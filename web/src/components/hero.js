import React from 'react'
import Img from 'gatsby-image'
import Title from './title'
import styled, { keyframes } from 'styled-components'

export const Hero = ({img,altImgText,Icon,title,subtitle,description,btnText}) => {
  return (
    <StyledHero>
      <div className="container">
        <div className="hero-wrap">
          <Img className="hero-img" fluid={img} alt={altImgText}/>
          <div className="hero-text-wrap">
            <div className="hero-title-wrap">
              <Icon className="hero-icon"/>
              <Title title={title} subtitle={subtitle} />
            </div>
            <div className="hero-p-wrap">
              <p className="hero-p">
                {description}
              </p>
              <a href="https://www.amazon.com" className="btn hero-btn">{btnText}</a>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-bg-art-wrap">
        <svg className="hero-bg-art-clip-path">
          <clipPath id="my-clip-path" clipPathUnits="objectBoundingBox">
            <path d="M0.163,0.319 C0.08,0.315,0.02,0.105,0,0 l0,0.499 l0,0.153 c0.04,0,0.069,0.055,0.097,0.109 c0.027,0.051,0.052,0.101,0.087,0.101 c0.031,0,0.052,-0.039,0.075,-0.084 c0.031,-0.057,0.066,-0.124,0.135,-0.126 c0.072,-0.003,0.119,0.057,0.158,0.107 c0.026,0.034,0.049,0.064,0.074,0.067 c0.028,0.004,0.053,-0.026,0.08,-0.059 c0.034,-0.041,0.074,-0.088,0.131,-0.086 c0.083,0.004,0.143,0.214,0.163,0.319 V0.501 v-0.002 v-0.151 c-0.04,0,-0.069,-0.055,-0.097,-0.109 c-0.027,-0.051,-0.052,-0.101,-0.087,-0.101 c-0.031,0,-0.052,0.039,-0.075,0.084 c-0.031,0.057,-0.066,0.124,-0.135,0.126 c-0.072,0.003,-0.119,-0.057,-0.158,-0.107 c-0.026,-0.034,-0.049,-0.064,-0.074,-0.067 c-0.028,-0.004,-0.053,0.026,-0.08,0.059 C0.259,0.274,0.22,0.322,0.163,0.319"></path>
          </clipPath>
        </svg>
        <div className="hero-bg-art">
        </div>
      </div>
    </StyledHero>
  )
}

const gradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 50% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`

const float = keyframes`
  0% {
    transform: translatey(0px);
  }
  50% {
    transform: translatey(-40%);
  }
  100% {
    transform: translatey(0px);
  }
`

const StyledHero = styled.section`

  @media (min-width: 480px) {
    margin-top: var(--space-xl);
  }

  @media (min-width: 768px) {
    margin-top: var(--space-xxl);
  }

  @media (min-width: 992px) {
    margin-top: var(--space-xl);
  }

  .hero-wrap {

    @media (min-width: 992px) {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .hero-img {
      max-width: 250px;
      max-height: 550px;
      margin: 0 auto;
      margin-top: var(--space-lg);
      width: 100%;

      @media (min-width: 992px) {
        width: auto;
        height: auto;
        flex: 1;
        margin-right: var(--space-lg);
        margin: 0;
        margin-right: var(--space-xl);
        max-width: initial;
      }
    }

    .hero-text-wrap {

      @media (min-width: 992px) {
        flex-basis: 500px;
      }

      .hero-title-wrap {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: var(--space-lg);

        .title {
          margin: 0;
          margin-top: var(--space-xs);
          position: relative;
          font-size: var(--text-xxxl);
        }

        .subtitle {
          margin: 0;
          font-size: var(--text-xl);
          margin-top: var(--space-xs);

          @media (min-width: 768px) {
            margin-top: var(--space-sm);
          }
        }
      }

      .hero-icon {
        width: 45px;
        height: 41px;
        margin-bottom: calc(-1 * var(--space-md));
        animation: ${float} 5s ease infinite;
        will-change: transform;
      }

      .hero-p-wrap {
        text-align: center;
      }

      .hero-p {
        margin: 0 auto;
        margin-top: var(--space-md);
      }

      .hero-btn {
        display: inline-block;
        margin-top: var(--space-lg);
        font-size: var(--text-lg);
        letter-spacing: 2px;
      }
    }
  }
  

  .hero-bg-art-wrap {
    position: absolute;
    top: 0;
    z-index: -1;
    min-width: 1120px;
    width: 100%;

    @media(min-width: 768px) {
      margin-top: var(--space-lg);
    }

    @media(min-width: 992px) {
      margin-top: 36rem;
    }
  }

  .hero-bg-art-clip-path {

  }

  .hero-bg-art {
    background: linear-gradient(269.59deg, rgba(231, 99, 86, 0.56) 10.02%, rgba(255, 217, 58, 0.56) 94.67%);
    height: 250px;
    clip-path: url(#my-clip-path);
    animation: ${gradient} 2s ease infinite;
    background-size: 400% 400%;
  }
`

export default Hero