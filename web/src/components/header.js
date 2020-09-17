import styled from 'styled-components'
import React, {useState} from 'react'
import Anilink from 'gatsby-plugin-transition-link/Anilink'
import Dot from './dot.js'
import {Spiral as Hamburger} from 'hamburger-react'
import links from '../constants/links'
import {blogLinks} from '../constants/links'
import logo from '../images/logo.svg'
import {v4 as uuidv4} from 'uuid'

export const Header = () => {
  const [isOpen, setNav] = (useState(false))
  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }

  return (
    <StyledHeader>
      <div className="container">
        <div className="header-wrap">
          <Anilink className="logo-wrap" fade to="/">
            <img className="logo" src={logo} alt="Amelia Pond Logo - cursive writing of her name"/>
          </Anilink>
          <nav className="nav" role="navigation">
            <div className={isOpen?`nav-wrap expanded`:`nav-wrap`}>
              <ul className="nav-list">
                {blogLinks.map((item)=>{
                  return(
                    <li key={uuidv4()}><Anilink className="nav-link" fade to={item.path} key={uuidv4()}><Dot color={item.color} />{item.text}</Anilink></li>
                  )
                })}
              </ul>
              <ul className="nav-list">
              {links.map((item)=>{
                  return(
                    <li key={uuidv4()}><Anilink className="nav-link" fade to={item.path} key={uuidv4()}>{item.text}</Anilink></li>
                  )
                })}
              </ul>
            </div>
            <button aria-label="Open nav menu" className="nav-burger" onClick={toggleNav}>
              <Hamburger direction="right" size={30} />
            </button>
          </nav>
        </div>
      </div>    
    </StyledHeader>
  )
}

const StyledHeader = styled.div`
  position: relative;
  z-index: 99;
  margin-bottom: 3px;
  background-color: var(--lazy);

  .header-wrap {
    display: flex;
    z-index: 2;
    padding: 1rem 0;
  }

  .logo-wrap {
    width: 150px;
  }

  .logo {
    margin-bottom: 0;
  }

  .nav-wrap {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 100%;
    margin-left: auto;
    margin-right: auto;
    height: 0;
    overflow: hidden;
    transition: height var(--mainTransition);
    border-bottom: 3px solid var(--travel);
    background-color: var(--white);

    &.expanded {
      height: 330px;
      border-bottom: 3px solid var(--travel);
    }
  }

  .nav-list {
    list-style-type: none;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    &.left {
      
    }

    &.right {
      
    }
  }

  .nav-link {
    text-transform: capitalize;
    margin: var(--space-sm) 0;
    display: flex;
    align-items: center;
    font-size: var(--text-lg);
  }

  .nav-burger {
    position: absolute;
    right: 1.5rem;
    top: 1.3rem;
    background: none;
    border: none;
    outline: none;
  }
`

export default Header

