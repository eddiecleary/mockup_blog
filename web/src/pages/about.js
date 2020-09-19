import React from "react"
import Layout from '../components/layout'
import Hero from '../components/hero'
import Img from 'gatsby-image'
import styled from 'styled-components'
import EmojiSvg from '../images/svg/emojismile.svg'

export const about = ({data}) => {
  return (
    <Layout>
      <StyledAbout>

        <Hero img={data.heroImage.childImageSharp.fluid} altImgText="Amelia Pond holding smiling - portrait shot" title="About Me" Icon={EmojiSvg} subtitle={"Author, Blogger, Traveler!"} description={aboutHeroDescription} btnText="Read More" />

        <section className="about-section">
          <div className="container">
          	<article className="about-item item-1">
          	  <h2 className="about-item-title">
          	    just a simple person with big dreams
          	  </h2>
          	  <p className="about-item-description">
          	    Cronut fingerstache readymade synth, kinfolk copper mug heirloom paleo biodiesel hella mustache. Pitchfork mumblecore roof party twee, bitters fashion axe YOLO photo booth fanny pack cred selfies. Yuccie ennui narwhal swag leggings try-hard. Lumbersexual cred chia etsy neutra normcore. Literally deep v 3 wolf moon, poke polaroid yuccie ennui actually enamel pin cold-pressed.
          	  </p>
          	  <Img fluid={data.hammock.childImageSharp.fluid} className="about-item-image"/>
          	</article>
          	<article className="about-item item-2">
          	  <h2 className="about-item-title">
          	    my achievements
          	  </h2>
          	  <p className="about-item-description">
          	    Lumbersexual glossier fashion axe af small batch enamel pin listicle. Ennui salvia hot chicken hella raclette pickled pabst humblebrag gluten-free jean shorts swag pour-over listicle. Chartreuse next level crucifix, tilde thundercats 90's letterpress. Man bun fam marfa flexitarian. Street art YOLO brunch poutine. Ennui try-hard portland flexitarian put a bird on it YOLO poke selfies kickstarter.
          	  </p>
          	  <Img fluid={data.award.childImageSharp.fluid} className="about-item-image"/>
          	</article>
          	<article className="about-item item-3">
          	  <h2 className="about-item-title">
          	    thank you!
          	  </h2>
          	  <p className="about-item-description">
          	    Leggings pinterest listicle edison bulb +1 photo booth taiyaki next level plaid man bun skateboard church-key occupy succulents mixtape. Meditation unicorn godard flannel photo booth flexitarian kinfolk crucifix irony taxidermy woke hashtag hammock williamsburg man braid. Fam blog lyft vegan, air plant fashion axe XOXO. Kinfolk next level wayfarers cray VHS godard intelligentsia lo-fi mumblecore everyday carry XOXO subway tile echo park forage mlkshk.
          	  </p>
          	  <Img fluid={data.cupcake.childImageSharp.fluid} className="about-item-image"/>
          	</article>
          </div>
        </section>
        
      </StyledAbout>
    </Layout>
  )
}

const StyledAbout = styled.main`

  .about-section {
    margin-top: var(--space-xxxl);

    @media (min-width: 992px) {
      margin-top: 15rem;
    }

    .about-item {
      margin-bottom: var(--space-xl);

      @media(min-width: 992px) {
        margin-bottom: var(--space-xxl);
      }
      
      .about-item-title {
        text-align: center;
      }

      .about-item-description {
        margin: 0 auto;
        max-width: 700px;
        margin-top: var(--space-lg);
      }

      .about-item-image {
        max-width: 700px;
        margin: 0 auto;
        margin-top: var(--space-xl);
      }
    }

    .about-item.item-1 {
      .about-item-image {
        max-width: 700px;
      }
    }

    .about-item.item-2 {
      .about-item-image {
        max-width: 350px;
      }
    }

    .about-item.item-3 {
      .about-item-image {
        max-width: 100%;
      }
    }
  }

`
export const query = graphql`
  query {
    heroImage: file(relativePath:{eq:"images/aboutHero.jpg"}){
      childImageSharp{
        fluid(quality:90,maxWidth:450){
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    hammock: file(relativePath:{eq:"images/hammock.jpg"}){
      childImageSharp{
        fluid(quality:90,maxWidth:700){
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    award: file(relativePath:{eq:"images/award.jpg"}){
      childImageSharp{
        fluid(quality:90,maxWidth:350){
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    cupcake: file(relativePath:{eq:"images/cupcake.jpg"}){
      childImageSharp{
        fluid(quality:90,maxWidth:900){
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const aboutHeroDescription = `I'm baby subway tile air plant 3 wolf moon master cleanse humblebrag butcher unicorn narwhal palo santo pork belly kogi. Cray keytar man braid fashion axe. Street art bushwick messenger bag la croix, butcher vaporware ennui. Coloring book tumeric banjo, retro beard 90's gochujang squid art party intelligentsia post-ironic before they sold out.`;

export default about

