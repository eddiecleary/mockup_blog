import React from 'react'
import Img from 'gatsby-image'
import Title from './title';
import '../scss/hero.scss'

export const Hero = ({img,altImgText,icon,title,subtitle,description,btnText}) => {
  return (
    <section className="hero">
      <div className="container">
        <Img className="hero__img" fluid={img} alt={altImgText}/>
        <div className="hero__titleWrap">
        <svg className="hero__icon"  width="34" height="36" version="1.1" viewBox="0 0 34 36" xmlns="http://www.w3.org/2000/svg">
            <path d="m34 18.958c0-2.062-0.367-4.039-1.04-5.868-0.46 5.389-3.333 8.157-6.335 6.868-2.812-1.208-0.917-5.917-0.777-8.164 0.236-3.809-0.012-8.169-6.931-11.794 2.875 5.5 0.333 8.917-2.333 9.125-2.958 0.231-5.667-2.542-4.667-7.042-3.238 2.386-3.332 6.402-2.333 9 1.042 2.708-0.042 4.958-2.583 5.208-2.84 0.28-4.418-3.041-2.963-8.333-2.518 2.965-4.038 6.805-4.038 11 0 9.389 7.611 17 17 17s17-7.611 17-17z" fill="#f4900c" opacity=".85638"/>
            <path d="m27.394 23.957c0.148 3.084-2.561 4.293-4.019 3.709-2.106-0.843-1.541-2.291-2.083-5.291s-2.625-5.083-5.708-6c2.25 6.333-1.247 8.667-3.08 9.084-1.872 0.426-3.753-1e-3 -3.968-4.007-2.184 2.174-3.536 5.182-3.536 8.506 0 0.368 0.023 0.73 0.055 1.09 3.07 3.034 7.287 4.91 11.945 4.91s8.875-1.876 11.945-4.91c0.032-0.36 0.055-0.722 0.055-1.09 0-2.187-0.584-4.236-1.606-6.001z" fill="#FFCC4D"/>
          </svg>
          <Title title={title} subtitle={subtitle} animated="true"/>
        </div>
        <div className="hero__descriptionWrap">
          <p className="hero__description">
            {description}
          </p>
          <a href="https://www.amazon.com" className="btn hero__btn">{btnText}</a>
        </div>
      </div>
      <div className="hero__art">
        <svg className="hero__artClipPath">
          <clipPath id="my-clip-path" clipPathUnits="objectBoundingBox">
            <path d="M0.163,0.319 C0.08,0.315,0.02,0.105,0,0 l0,0.499 l0,0.153 c0.04,0,0.069,0.055,0.097,0.109 c0.027,0.051,0.052,0.101,0.087,0.101 c0.031,0,0.052,-0.039,0.075,-0.084 c0.031,-0.057,0.066,-0.124,0.135,-0.126 c0.072,-0.003,0.119,0.057,0.158,0.107 c0.026,0.034,0.049,0.064,0.074,0.067 c0.028,0.004,0.053,-0.026,0.08,-0.059 c0.034,-0.041,0.074,-0.088,0.131,-0.086 c0.083,0.004,0.143,0.214,0.163,0.319 V0.501 v-0.002 v-0.151 c-0.04,0,-0.069,-0.055,-0.097,-0.109 c-0.027,-0.051,-0.052,-0.101,-0.087,-0.101 c-0.031,0,-0.052,0.039,-0.075,0.084 c-0.031,0.057,-0.066,0.124,-0.135,0.126 c-0.072,0.003,-0.119,-0.057,-0.158,-0.107 c-0.026,-0.034,-0.049,-0.064,-0.074,-0.067 c-0.028,-0.004,-0.053,0.026,-0.08,0.059 C0.259,0.274,0.22,0.322,0.163,0.319"></path>
          </clipPath>
        </svg>
        <div className="hero__artClippedBg">

        </div>
      </div>
    </section>
  )
}

export default Hero