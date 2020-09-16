import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import '../scss/global.scss'
import '../scss/layout.scss'

const Layout = ({children}) => {
  return (
    <div className="layout">
      <Navbar />
        <main>
          {children}
        </main>
      <Footer />
    </div>
  )
}

export default Layout
