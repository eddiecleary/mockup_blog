import styled from 'styled-components'
import React, {useState} from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Dot from './dot.js'
import {Spiral as Hamburger} from 'hamburger-react'
import links from '../constants/links'
import {blogLinks} from '../constants/links'
import Logo from '../images/svg/logo.svg'
import {v4 as uuidv4} from 'uuid'

export const Header = () => {
  const [isOpen, setNav] = (useState(false))
  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }

  return (
    <StyledHeader>
      <div className="container fw">
        <div className="header-wrap">
          <AniLink className="logo-wrap" to="/">
            <Logo className="logo"/>
          </AniLink>
          <nav className="nav" role="navigation">
            <div className={isOpen?`nav-wrap expanded`:`nav-wrap`}>
              <ul className="nav-list left">
                {blogLinks.map((item)=>{
                  return(
                    <li key={uuidv4()}><AniLink className="nav-link" fade to="/" key={uuidv4()}><Dot color={item.color} />{item.text}</AniLink></li>
                  )
                })}
              </ul>
              <ul className="nav-list right">
              {links.map((item)=>{
                  return(
                    <li key={uuidv4()}><AniLink className="nav-link" fade to={item.path} key={uuidv4()}>{item.text}</AniLink></li>
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

  @media (min-width: 992px) {
    border-bottom: 3px solid var(--travel);
  }

  .header-wrap {
    display: flex;
    z-index: 2;
    padding: 1rem 0;
    margin: 0 auto;
    height: var(--space-xxl);
    width: 90%;

    @media (min-width: 992px) {
      justify-content: space-between;
      max-width: 1300px;
    }
  }

  .logo-wrap {
    width: 150px;
    position: relative;
  }

  .logo {
    margin-bottom: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
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

    @media (min-width: 992px) {
      position: static;
      background-color: transparent;
      height: auto;
      border: 0;
      display: flex;
    }

    &.expanded {
      height: 310px;
      border-bottom: 3px solid var(--travel);

      @media (min-width: 480px) {
        height: 360px;
      }

      @media (min-width: 768px) {
        height: 375px;
      }

      @media (min-width: 992px) {
        height: auto;
        border-bottom: none;
      }
    }
  }

  .nav-list {
    list-style-type: none;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 992px) {
      flex-direction: row;
    }

    &.left {

      @media (min-width: 992px) {

        .nav-link {
          margin-left: var(--space-lg);
        }  
      }

    }

    &.right {
      
      @media (min-width: 992px) {
        
        .nav-link {
          margin-left: var(--space-md);
        }
      }
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
    right: 5%;
    top: 1.3rem;
    background: none;
    border: none;
    outline: none;

    @media (min-width: 992px) {
      display: none;
    }
  }
`

export default Header

