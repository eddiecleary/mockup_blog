import React, {useEffect, createRef} from "react"
import Layout from '../components/layout'
import {graphql} from 'gatsby'
import FireSvg from '../images/svg/fire.svg'
import WaveSvg from '../images/svg/wave.svg'
import ArrowSvg from '../images/svg/arrow.svg'
import Hero from '../components/hero'
import lottie from 'lottie-web'
import lightBulbAnimation from '../images/lottie/lightbulb.json'
import testimonialAnimation from '../images/lottie/testimonial.json'
import Title from '../components/title'
import SpinCircle from '../components/spinCircle'
import Testimonials from '../components/testimonials'
import Img from 'gatsby-image'
import BlogList from '../components/blogList'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import styled, { keyframes } from 'styled-components'
import { mapEdgesToNodes } from '../lib/helpers.js'
import SEO from '../components/seo'

export function Home({data}) {
  let animationContainer = createRef();
  let animationContainer2 = createRef();

  const recentPosts = mapEdgesToNodes(data.recentPosts);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: lightBulbAnimation,
    }).setSpeed(0.75);
    // return () => anim.destroy(); // optional clean up for unmounting
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const anim2 = lottie.loadAnimation({
      container: animationContainer2.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: testimonialAnimation,
      });
      // return () => anim2.destroy();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Layout>
      <SEO />
      <StyledIndex>
        <Hero img={data.heroImage.childImageSharp.fluid} altImgText="Amelia Pond holding her book 'Think Outside the Box'" Icon={FireSvg} title="fire up" subtitle="your creativity" description={indexHeroDescription} btnText="buy book" />
        
        <section className="intro-section">
          <div className="container">
            <h2 className="intro-title">who is this book for?</h2>
            <div className="intro-sub-title-wrap">
              <div className="intro-animation animation-container" ref={animationContainer}></div>
              <Title className="intro-sub-title" title="all creatives" headingLevel={2}/>     
            </div>
            <p className="intro-p">Rediscover your imagination and ignite your creativity. Think Outside The Box  helps creatives of all types break out of boring templates and start creating designs using their own creative imagination.</p>
            <div className="intro-circle-wrap">
              <SpinCircle text="designers" image={data.spin1.childImageSharp.fixed}  BGimage={data.spin1_bg.childImageSharp.fixed}  />
              <SpinCircle text="developers" image={data.spin2.childImageSharp.fixed} BGimage={data.spin2_bg.childImageSharp.fixed} />
              <SpinCircle text="artists" image={data.spin3.childImageSharp.fixed} BGimage={data.spin3_bg.childImageSharp.fixed}/>
            </div>
          </div>
        </section>
        
        <section className="testimonials-section">
          <div className="container wide">
            <div className="animation-container2 testimonials-animation" ref={animationContainer2}>       
            </div>
            <h3 className="testimonials-title">what readers are saying</h3>
            <Testimonials number={4}/>          
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <div className="cta-img-wrap">
              <Img className="cta-img-book" fluid={data.ctaImg1.childImageSharp.fluid} />
              <Img className="cta-img-phone" fluid={data.ctaImg2.childImageSharp.fluid} />
            </div>
            <a href="/" className="btn">buy now</a>
          </div>
        </section>

        <section className="blog-intro-section">
          <div className="container">
            <div className="blog-intro-wrap-1">
              <Img className="blog-intro-profile-img" fluid={data.amelia.childImageSharp.fluid} />
              <div className="blog-intro-title-wrap-top">
                <h3 className="blog-intro-title-1">Hello!</h3>
                <WaveSvg className="blog-intro-wave-svg" />
              </div>
            </div>
            <div className="blog-intro-wrap-2">
              <div className="blog-intro-title-wrap-bottom">
                <h3 className="blog-intro-title-2">i'm amelia pond</h3>
                <h4 className="blog-intro-sub-title">creativity coach</h4>
              </div>
            </div>
            <p className="blog-intro-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </p>
            <div className="blog-intro-btn-wrap">
              <AniLink className="btn btn-secondary" fade to="/about">About Me</AniLink>
              <AniLink className="btn btn-secondary" fade to="/contact">Contact</AniLink>
            </div>
            <div className="blog-intro-arrow-wrap">
              <ArrowSvg className="blog-intro-arrow-svg"/>
            </div>
          </div>
        </section>

        <section className="latest-blogs-section">
          <div className="container">
            <BlogList posts={recentPosts}/>
            <AniLink className="btn btn-secondary latest-blogs-btn" fade to="/blog">view all posts</AniLink>
          </div>
        </section>
      
      </StyledIndex>

    </Layout>
  )
}


export const query = graphql`
  query{
    spin1:file(relativePath:{eq:"images/spin1.png"}){
      ...spinImgFragment
    }
    spin1_bg: file(relativePath: {eq: "images/spin1_bg.png"}){
      ...spinBGFragment
    }
    spin2: file(relativePath: {eq: "images/spin2.png"}){
      ...spinImgFragment
    }
    spin2_bg: file(relativePath: {eq: "images/spin2_bg.png"}){
      ...spinBGFragment
    }
    spin3: file(relativePath: {eq: "images/spin3.png"}){
      ...spinImgFragment
    }
    spin3_bg: file(relativePath: {eq: "images/spin3_bg.png"}){
      ...spinBGFragment
    }
    heroImage: file(relativePath:{eq:"images/homeHero.jpg"}){
      childImageSharp{
        fluid(quality:90,maxWidth:450){
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    ctaImg1: file(relativePath: {eq: "images/cta1.jpg"}){
      childImageSharp{
        fluid(quality:75,maxWidth:433){
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    ctaImg2: file(relativePath: {eq: "images/cta2.jpg"}){
      childImageSharp{
        fluid(quality:75,maxWidth:145){
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    amelia: file(relativePath: {eq: "images/amelia.jpg"}){
      childImageSharp{
        fluid(quality:75,maxWidth:275){
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    recentPosts: allSanityPost(sort: {fields: [publishedAt], order: DESC}, filter: {slug: {current: {ne: null}}, publishedAt: {ne: null}}, limit: 4) {
      edges {
        node {
          id
          publishedAt(formatString: "MMM Do YYYY")
          mainImage {
            alt
            asset {
              fluid(maxWidth: 500) {
                ...GatsbySanityImageFluid
              }
            }
          }
          title
          _rawExcerpt
          slug {
            current
          }
          categories {
            title
          }
        }
      }
    }
  }
`;

export const fragments = graphql`
  fragment spinImgFragment on File {
    childImageSharp {
      fixed(width: 180, height: 180) {
        ...GatsbyImageSharpFixed_withWebp_tracedSVG

      }
    }
  }

  fragment spinBGFragment on File {
    childImageSharp {
      fixed(width: 200, height: 200) {
        ...GatsbyImageSharpFixed_withWebp_tracedSVG

      }
    }
  }
`;

const indexHeroDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.'



const wave = keyframes`
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(10deg);
  }
  50% {
    transform: rotate(0deg);
  }
  75% {
    transform: rotate(-10deg);
  }
  100% {
    transform: rotate(0deg);
  }
`

const StyledIndex = styled.main`

  .intro-section {
    text-align: center;
    margin-top: var(--space-xxxl);

    @media (min-width: 992px) {
      margin-top: 20rem;
    }

    .intro-title {
      text-align: center;
      font-size: var(--text-xxl);
    }

    .intro-sub-title-wrap {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: var(--space-lg);

      @media (min-width: 768px) {
        margin-top: var(--space-xl);
      }

      @media (min-width: 992px) {
        margin-top: var(--space-md);
      }

      .title {
        position: relative;
        font-size: var(--text-xxl);
      }
    }
    
    .intro-animation {
      width: 80px;
      margin: 0;
      display: block;
      margin-right: var(--space-xs);

      @media (min-width: 992px) {
        width: 130px;
      }
    }

    .intro-sub-title {
      margin-top: var(--space-lg);

    }

    .intro-p {
      margin: 0 auto;
      margin-top: var(--space-md);

      @media (min-width: 992px) {
        max-width: 700px;
      }
    }

    .intro-circle-wrap {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: var(--space-lg);

      @media(min-width: 768px) {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        margin-left: auto;
        margin-right: auto;
      }

      @media (min-width: 992px) {
        justify-content: space-between;
        margin-top: var(--space-xl);
      }
    }
  }

  .testimonials-section {
    margin-top: var(--space-xl);

    @media (min-width: 768px) {
      margin-top: var(--space-lg);
    }

    @media (min-width: 992px) {
      margin-top: var(--space-xxxl);
    }

    .testimonials-animation {
      width: 120px;
      margin: 0 auto;
      display: block;
      margin-top: 0rem;
    }

    .testimonials-title {
      text-transform: capitalize;
      text-align: center;
      margin-top: var(--space-xs);
      margin-bottom: var(--space-lg);
      font-size: var(--text-xl);
    } 
  }

  .cta-section {
    text-align: center;
    margin-top: var(--space-xxxl);

    .cta-img-wrap{

      @media(min-width: 768px) {
        display: flex;
        transform: translateX(-8%);
      }

      @media (min-width: 992px) {
        max-width: 700px;
        margin: 0 auto;
        transform: translateX(-10%);
      }

      .cta-img-book {
        width: 90%;
        max-width: 320px;
        margin: 0 auto;
        margin-bottom: var(--space-xl);
      }

      .cta-img-phone {
        width: 32%;
        max-width: 120px;
        margin: 0 auto;
        margin-bottom: var(--space-xl);
      }
    }

    .btn {

      @media (min-width: 768px){
        margin-top: var(--space-lg);
        display: inline-block;
      }
    }
  }

  .blog-intro-section {
    margin-top: var(--space-xxxl);

    @media (min-width: 992px) {
      max-width: 700px;
      margin-left: auto;
      margin-right: auto;
      margin-top: var(--space-xxl);
    }

    .blog-intro-wrap-1 {

      @media (min-width: 768px) {
        display: flex;
        justify-content: center;
      }

      @media (min-width: 992px) {
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        align-items: flex-end;
      }

      .blog-intro-profile-img {
        width: 200px;
        margin: 0 auto;

        @media (min-width: 768px) {
          margin: 0;
          margin-right: var(--space-md);  
        } 

        @media (min-width: 992px) {
          position: relative;
          top: var(--space-xxl);
          width: 220px;
        } 
      }

      .blog-intro-title-wrap-top {
        display: flex;
        align-items: center;
        justify-content: center;

        @media (min-width: 768px) {
          margin-bottom: calc(-1 * var(--space-xxl));
        }

        @media (min-width: 992px) {
          margin-bottom: var(--space-sm);
          align-items: flex-end;
        }

        .blog-intro-title-1 {
          margin-right: var(--space-xxs);
          font-size: var(--text-xxxl);

          @media (min-width: 992px) {
            margin: 0;
            margin-right: var(--space-xs);
          }
        }

        .blog-intro-wave-svg {
          animation: ${wave} 0.8s infinite cubic-bezier(0.55, 0.085, 0.68, 0.53);
          width: 45px;
          margin-bottom: var(--space-sm);
        }
      }
    }

    .blog-intro-wrap-2 {

      .blog-intro-title-wrap-bottom {
        display: flex;
        flex-direction: column;
        text-align: center;

        @media(min-width: 768px) {
          margin-top: var(--space-xl);
        }

        @media(min-width: 992px) {
          align-items: flex-start;
          margin-top: 0;
        }
        
        .blog-intro-title-2 {
          margin: 0;
          font-size: var(--text-xxl);
        }

        .blog-intro-sub-title {
          margin: 0;
          letter-spacing: 3.5px;
          color: grey;
          margin-top: var(--space-xxxs);
          font-size: var(--text-md);
        }
      }
    }

    .blog-intro-p {
      text-align: center;
      margin: var(--space-lg) auto;
    }

    .blog-intro-btn-wrap {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;

      .btn {
        margin: 1rem;
      }
    }

    .blog-intro-arrow-wrap {
      width: 300px;
      margin: 0 auto;
      margin-top: var(--space-lg);
      transform: rotate(-30deg);

      @media (min-width: 992px) {
        margin-top: var(--space-xxl);
      }

      .blog-intro-arrow-svg {
        width: 100%;
      }
    }
  }

  .latest-blogs-section {
    margin-bottom: var(--space-xxxl);

    .latest-blogs-btn {
      display: block;
      margin: 0 auto;
      margin-top: var(--space-xl);
      text-align: center;
      max-width: 350px;

      @media (min-width: 992px) {
        margin-top: var(--space-sm);
      }
    }
  }
`

export default Home
