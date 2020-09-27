import React from 'react'
import PropTypes from 'prop-types'
import {Helmet} from 'react-helmet'
import {StaticQuery, graphql} from 'gatsby'
import {imageUrlFor} from '../lib/image-url'
import {buildImageObj} from '../lib/helpers'

function SEO ({description, lang, meta, keywords, title, image}) {
  return (
    <StaticQuery
      query={query}
      render={data => {
        const {
          defaultTitle,
          defaultDescription,
          defaultImage,
          author
        } = data.site.siteMetadata;
        const metaDescription = description || (data.site && defaultDescription) || ''
        const siteTitle = (data.site && defaultTitle) || ''
        const siteAuthor = (data.site && author.name) || ''
        const metaImage = (image && image.asset) ? imageUrlFor(buildImageObj(image)).width(1200).url() : defaultImage

        return (
          <Helmet
            htmlAttributes={{lang}}
            title={siteTitle}
            meta={[
              {
                name: 'description',
                content: metaDescription
              },
              {
                property: 'og:title',
                content: title
              },
              {
                property: 'og:description',
                content: metaDescription
              },
              {
                property: 'og:type',
                content: 'website'
              },
              {
                property: 'og:image',
                content: metaImage
              },
              {
                name: 'twitter:card',
                content: 'summary'
              },
              {
                name: 'twitter:creator',
                content: siteAuthor
              },
              {
                name: 'twitter:title',
                content: siteTitle
              },
              {
                name: 'twitter:description',
                content: metaDescription
              }
            ]
              .concat(
                keywords && keywords.length > 0
                  ? {
                    name: 'keywords',
                    content: keywords.join(', ')
                  }
                  : []
              )
              .concat(meta)}
          />
        )
      }}
    />
  )
}

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  keywords: ['blog','example','gatsby']
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  image: PropTypes.string
}

export default SEO

export const query = graphql`
  query{
    site {
      siteMetadata {
        defaultTitle: title
        author
        defaultDescription: description
        defaultImage: image
      }
    }
  }
`
