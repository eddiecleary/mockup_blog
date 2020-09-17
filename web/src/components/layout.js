import React from 'react'
import Header from './header'
import Footer from './footer'
import { GlobalStyles } from './global-styles'

const Layout = ({children}) => {
  return (
    <>
      <GlobalStyles />
      <Header />
        {children}
      <Footer />
    </>
  )
}

export default Layout
