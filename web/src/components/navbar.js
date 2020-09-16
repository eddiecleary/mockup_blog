import React, {useState} from 'react'
import Anilink from 'gatsby-plugin-transition-link/Anilink'
import Dot from './dot.js'
import {Spiral as Hamburger} from 'hamburger-react'
import '../scss/header.scss'
import links from '../constants/links'
import {blogLinks} from '../constants/links'
import logo from '../images/logo.svg'
import {v4 as uuidv4} from 'uuid'

export const Navbar = () => {
  const [isOpen, setNav] = (useState(false))
  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header__flexWrap">
          <Anilink className="header__logoWrap" fade to="/">
            <img className="header__logo" src={logo} alt="Amelia Pond Logo - cursive writing of her name"/>
          </Anilink>
          <nav className="header__nav" role="navigation">
            <div className={isOpen?`header__navWrap header__navWrap--expanded`:`header__navWrap`}>
              <ul className="header__navList header__navList--left">
                {blogLinks.map((item)=>{
                  return(
                    <li key={uuidv4()}><Anilink className="header__navLink" fade to={item.path} key={uuidv4()}><Dot color={item.color} />{item.text}</Anilink></li>
                  )
                })}
              </ul>
              <ul className="header__navList header__navList--right">
              {links.map((item)=>{
                  return(
                    <li key={uuidv4()}><Anilink className="header__navLink" fade to={item.path} key={uuidv4()}>{item.text}</Anilink></li>
                  )
                })}
              </ul>
            </div>
            <button aria-label="Open nav menu" className="header__navToggler" onClick={toggleNav}>
              <Hamburger direction="right" size={30} />
            </button>
          </nav>
        </div>
      </div>    
    </header>
  )
}

export default Navbar

