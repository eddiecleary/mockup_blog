import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Bloglist from '../components/blogList'
import { mapEdgesToNodes } from '../lib/helpers.js'


export const archive = ({data}) => {
  const posts = mapEdgesToNodes(data.allSanityPost);
  console.log(posts);
  return (
    <Layout>
      <StyledArchive>

        <section className="hero">
          <div className="container">
            <h1 className="hero-title">Blog Archive</h1>
            <h2 className="hero-subtitle">View all of my latest blog posts below!</h2>
            <Bloglist posts={posts} />
          </div>
        </section>

      </StyledArchive>
    </Layout>
  )
}

const StyledArchive = styled.main`
  .hero {
    margin-top: var(--space-xl);
    text-align: center;

    .hero-title {
      text-decoration: underline;
    }

    .hero-subtitle {

    }
  }
`

export const query = graphql`
query {
  allSanityPost(sort: {order: DESC, fields: publishedAt}){
    edges {
      node {
        id
        publishedAt(formatString: "MMM Do YYYY")
        mainImage {
          alt
          asset {
            fluid(maxWidth: 400) {
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
`

export default archive
