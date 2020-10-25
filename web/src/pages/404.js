import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import styled from 'styled-components'
import {Link} from 'gatsby'

const NotFoundPage = () => (
  <Layout>
    <SEO title='404: Not found' />
    <Error404>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <Link to='/' >Back To Home Page</Link>
    </Error404>
  </Layout>
)

const Error404 = styled.main`
  text-align: center;

  a {
    color: blue;
  }
`

export default NotFoundPage
