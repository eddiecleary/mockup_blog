// Load variables from `.env` as soon as possible
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`
})

const path = require('path')

const clientConfig = require('./client-config')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  siteMetadata: {
    title: `Premium Blog Example | Skyward Designs`,
    author: 'Eddie Cleary',
    description: 'A mockup site built by Skyward Designs to show expertise in building Gatsby blog websites.',
    image: 'screenshot.jpg',
    siteUrl: 'https://blog.skywarddesigns.com'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-transition-link',
    'gatsby-source-sanity-transform-images',
    'gatsby-plugin-sharp',
    'gatsby-plugin-preact',
    'gatsby-plugin-netlify',
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-156955526-2',
        head: false,
        anonymize: true,
        respectDNT: true,
        pageTransitionDelay: 400,
        defer: true,
        cookieDomain: 'eddiecleary.com'
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Blog Mockup | Skyward Designs',
        start_url: '/',
        icon: 'src/images/favicon.png',
        lang: 'en',
        description: 'A mockup site built by Skyward Designs to show expertise in building Gatsby blog websites.'
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: [path.resolve(__dirname, 'src/images/svg/')]
        }
      }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Varela Round`
          },
          {
            family: `Lora`
          }
        ]
      }
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        ...clientConfig.sanity,
        token: process.env.SANITY_READ_TOKEN,
        watchMode: !isProd,
        overlayDrafts: !isProd
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    }
  ]
}
