import React from "react"
import Layout from '../components/layout'
import Hero from '../components/hero'
import Img from 'gatsby-image'
import styled from 'styled-components'
import ContactSvg from '../images/svg/contact.svg'

export const contact = ({data}) => {
  return (
    <Layout>
      <StyledContact>

        <Hero img={data.heroImage.childImageSharp.fluid} altImgText="Amelia Pond typing on a laptop keyboard" title="Contact" Icon={ContactSvg} subtitle={"Reach out to me!"} description={contactHeroDescription} btnText="Send Message" />

        <section className="contact-section">

        </section>

      </StyledContact>
    </Layout>
  )
}

export const query = graphql`
  query {
    heroImage: file(relativePath:{eq:"images/contactHero.jpg"}){
      childImageSharp{
        fluid(quality:90,maxWidth:450){
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const contactHeroDescription = `Neutra bicycle rights banh mi pickled swag. Helvetica mumblecore tilde, occupy lyft kitsch schlitz umami la croix kombucha street art retro knausgaard. Taxidermy cloud bread +1, chillwave next level drinking vinegar affogato asymmetrical normcore. Salvia irony hexagon viral.`


export default contact