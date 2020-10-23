import React from 'react'
import Header from './header'
import Footer from './footer'
import {GlobalStyles} from './global-styles'
// import BackBtn from './backBtn'

const Layout = ({children}) => {
  return (
    <>
      <GlobalStyles />
      <Header />
      {children}
      <Footer />
      {/* <BackBtn /> */}
    </>
  )
}

export default Layout
