import React from "react"
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Hero from '../components/hero'
import Img from 'gatsby-image'
import styled from 'styled-components'
import EnvelopeSvg from '../images/svg/envelope.svg'

export const contact = ({ data }) => {
  return (
    <Layout>
      <StyledContact>

        <Hero img={data.heroImage.childImageSharp.fluid} altImgText="Amelia Pond typing on a laptop keyboard" title="Contact" Icon={EnvelopeSvg} subtitle={"Reach out to me!"} description={contactHeroDescription} btnText="Send Message" />

        <section className="contact-section">
          <div className="container">
            <h2 className="contact-title">I Would Love To Hear From You!</h2>
            <form className="form">
              <div className="form-group w-50">
                <label className="form-label" htmlFor="name">Name:</label>
                <input type="text" placeholder="Name"/>
              </div>
              <div className="form-group w-50">
                <label className="form-label" htmlFor="email">Email:</label>
                <input type="email" placeholder="Email"/>
              </div>
              <div className="form-group w-100">
                <label htmlFor="message" className="form-label">Message:</label>
                <textarea name="message" id="message" cols="30" rows="10" placeholder="Enter message and click send!"/>
                <button className="form-submit" type="submit">Send!</button>
              </div>
            </form>
          </div>
        </section>

      </StyledContact>
    </Layout>
  )
}

const StyledContact = styled.main`

  .contact-section {
    text-align: center;
    max-width: 700px;
    margin: 0 auto;
    margin-top: var(--space-xxl);

    @media (min-width: 992px) {
      margin-top: 18rem;
    }

    .contact-title {
      
    }

    .form {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      border: 2px solid;
      border-radius: 20px;
      padding: var(--space-md);
      border-color: var(--travel);
      margin-top: var(--space-lg);
      margin-bottom: var(--space-xxxl);

      .form-group {
        display: flex;
        flex-direction: column;
        margin-bottom: var(--space-md);

        input {
          padding: var(--space-xs);
          border-radius: 5px;
          border: 2px solid lightgrey;

          &:focus {
            border: 2px solid;
            border-color: var(--lifestyle);
            border-radius: 5px;
            outline: none;
          }
        }

        &.w-50 {
          flex-basis: 100%;

          @media (min-width: 768px) {
            flex-basis: 48%;
          }
        }

        &.w-100 {
          flex-basis: 100%;
          position: relative;
        }

        textarea {
          border-radius: 10px;
          resize: none;
          padding: var(--space-xs);
          border: 2px solid lightgrey;

          &:focus {
            border: 2px solid;
            border-color: var(--lifestyle);
            border-radius: 10px;
            outline: none;
          }
        }

        .form-label {
          align-self: flex-start;
          font-weight: bold;
          margin-bottom: var(--space-xs);
        }
      }

      .form-submit {
        width: 100%;
        padding: 1rem;
        background-color: var(--travel);
        color: var(--white);
        border: none;
        border-radius: 10px;
        position: absolute;
        bottom: 0;

        &:hover {
          background-color: var(--lifestyle);
          cursor: pointer;
        }

        &:active {
          background-color: var(--lifestyle);
        }
      }
    }
  }
`

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