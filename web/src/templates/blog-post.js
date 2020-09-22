import React from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'
import Img from 'gatsby-image'
import PortableText from '../components/portableText'
import BlogList from '../components/blogList'
import { categoryToColor, mapEdgesToNodes } from '../lib/helpers.js'
import { graphql } from 'gatsby'
import SEO from '../components/seo'


export const blogPost = ({pageContext, data}) => {
  const {_id} = pageContext; 
  const {authors, _rawExcerpt, _rawBody, mainImage, publishedAt, title, categories} = data.thisPost;
  const category = categories[0].title;
  const color = categoryToColor(category);

  const otherPosts = mapEdgesToNodes(data.otherPosts);

  return (
    <Layout>
      <SEO />
      <StyledBlogPost color={color}>

        <section className="header">
          <div className="container">
            <Img fluid={mainImage.asset.fluid} alt={mainImage.alt} className="header-img"/>
            <div className="header-text-wrap">
              <h1 className="header-title">{title}</h1>
              <div className="author-wrap">
                <Img fixed={authors[0].author.image.asset.fixed} alt={authors[0].author.image.alt} className="author-img" />
                <p className="author-description">{`Written By: ${authors[0].author.name}`} <br /> {`on ${publishedAt}`}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="post">
          <div className="container">
            <div className="post-excerpt">
              <PortableText blocks={_rawExcerpt}></PortableText>
            </div>
            <div className="post-body">
              <PortableText blocks={_rawBody}></PortableText>
            </div>
          </div>
        </section>

        <section className="otherPosts">
          <div className="container">
            <h3 className="otherPosts-heading">{`Check out my other ${category.toLowerCase()} posts!`}</h3>
            <BlogList posts={otherPosts} />
          </div>
        </section>

      </StyledBlogPost>
    </Layout>
  )
}

const StyledBlogPost = styled.main`
  margin-top: var(--space-lg);

  @media (min-width: 480px) {
    margin-top: var(--space-xl);
  }

  @media (min-width: 1200px) {
    margin-top: var(--space-xxl);
  }

  .header {

    .header-img {
      border-radius: 4vw;
    }

    .header-text-wrap {

      .header-title {
        text-align: center;

        @media (min-width: 768px) {
          margin-top: var(--space-lg);
        } 
      }

      .author-wrap {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: var(--space-lg);

        @media (min-width: 480px) {
          flex-direction: row;
          justify-content: center;
        }

        .author-img {

          @media (min-width: 480px) {
            margin-right: var(--space-sm);
          }
        }

        .author-description {
          text-align: center;

          @media (min-width: 480px) {
            br {
              display: none;
            }
          }
        }
      }
    }
  }

  .post {
    margin-top: var(--space-md);
    margin-left: auto;
    margin-right: auto;

    @media (min-width: 480px) {
      margin-top: var(--space-xl);     
    }

    @media (min-width: 768px) {
      max-width: 800px;
    }

    @media (min-width: 992px) {
      max-width: 900px;
    }

    .post-excerpt {
      border-top: 5px solid ${props => props.color};
      border-bottom: 5px solid ${props => props.color};
    }

    .post-body {
      margin-top: var(--space-lg);

      @media (min-width: 480px) {
        margin-top: var(--space-xl);
      }

      blockquote {
        margin-right: 0;
        margin-left: 0;
        border-left: 5px solid ${props => props.color};
        padding-left: var(--space-sm);

        @media (min-width: 480px) {
          margin: var(--space-lg) 0;
        }
      }
    }
  }

  .otherPosts {
    margin-top: var(--space-xxl);
    margin-bottom: var(--space-xxl);

    .otherPosts-heading {
      text-align: center;
      text-transform: initial;
    }
  }
`

export const pageQuery = graphql`
query($_id:String!, $category:String!){
  thisPost:sanityPost(_id: {eq: $_id}) {
    authors {
      author {
        name
        image {
          alt
          asset {
            fixed(width: 70) {
              ...GatsbySanityImageFixed
            }
          }
        }
      }
    }
    title
    publishedAt(formatString: "MMM Do YYYY")
    mainImage {
      alt
      asset {
        id
        fluid(maxWidth: 900) {
          ...GatsbySanityImageFluid
        }
      }
    }
    categories {
      title
    }
    _rawExcerpt
    _rawBody
  }
  otherPosts:allSanityPost(limit: 3, filter: {categories: {elemMatch: {title: {eq: $category}}}, _id: {ne: $_id}}) {
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
`

export default blogPost
