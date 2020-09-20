import React from 'react'
import { graphql } from 'gatsby'
import BlogHero from '../components/blogHero'
import styled from 'styled-components'
import Layout from '../components/layout'
import Img from 'gatsby-image'
import { mapEdgesToNodes } from '../lib/helpers.js'
import BlogList from '../components/blogList'

export const BlogCategory = ({ pageContext, data }) => {
  const { title } = pageContext
  const {description, categoryImage} = data.categoryInfo.edges[0].node;
  const postsInfo = mapEdgesToNodes(data.categoryPosts);
  return (
    <Layout>
      <StyledBlogCategory>
        
        <section className="hero">
          <div className="container">
            <div className="hero-flexwrap">
              <div className="flexleft">
                <h1 className="hero-title">{`Creative ${title}`}</h1>
                <h2 className="hero-subtitle">{`All of my ${title} posts below`}</h2>
                <p className="hero-description">{description}</p>
              </div>
              <div className="flexright">
                <Img className="hero-img" fluid={categoryImage.asset.fluid} />
              </div>
            </div>
          </div>
        </section>

        <section className="posts">
          <div className="container">
            <BlogList posts={postsInfo} />
          </div>
        </section>       
      
      </StyledBlogCategory>
    </Layout>
  )
}

const StyledBlogCategory = styled.main`
  margin-top: var(--space-xxl);
  margin-bottom: var(--space-xxl);

  .hero-flexwrap {

    @media (min-width: 992px) {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .flexleft {
      text-align: center;

      @media (min-width: 992px) {
        text-align: left;
        margin-right: var(--space-md);
      }
    }

    .flexright {

      .hero-img {
        display: none;

        @media (min-width: 992px) {
          display: block;
          width: 450px;
        }
      }
    }
  }

  .posts {
    margin-top: var(--space-xxl);
  }

  

`

export const pageQuery = graphql`
  query($title: String!) {
    categoryPosts:allSanityPost(filter: {categories: {elemMatch: {title: {eq: $title}}}}) {
      edges {
        node {
          id
          title
          mainImage {
            alt
            asset {
              id
              fluid(maxWidth: 350) {
                ...GatsbySanityImageFluid
              }
            }
          }
          _rawExcerpt
          _rawSlug
          slug {
            current
          }
          categories {
            title
          }
          authors {
            author {
              name
            }
          }
          publishedAt(formatString: "MMM DD YYYY")
        }
      }
    }
    categoryInfo:allSanityCategory(filter: {title: {eq: $title}}) {
      edges {
        node {
          description
          categoryImage {
            alt
            asset {
              fluid(maxWidth: 450) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  }
`

export default BlogCategory