// import '../scss/layout/_footer.scss'
import React from 'react'
import socialIcons from '../constants/social-icons'
import Anilink from 'gatsby-plugin-transition-link/Anilink'
import Dot from './dot.js'
import links from '../constants/links'
import {blogLinks} from '../constants/links'
import logo from '../images/logo.svg'
import {v4 as uuidv4} from 'uuid'
import Newsletter from '../components/newsletter'
import styled from 'styled-components'

export const Footer = () => {
  return (
    <StyledFooter>
      <div className="container">

        <div className="footer-newsletter">
          <Newsletter />
        </div>

        <div className="footer-nav-wrap">
          <Anilink className="footer-logo-wrap" fade to="/">
            <img className="footer-logo" src={logo} alt="Amelia Pond Logo - cursive writing of her name"/>
          </Anilink>
          <ul className="footer-nav-list left">
            {blogLinks.map((item)=>{
              return(
                <li key={uuidv4()}><Anilink className="footer-nav-link" fade to="/" key={uuidv4()}><Dot color={item.color} />{item.text}</Anilink></li>
              )
            })}
          </ul>
          <ul className="footer-nav-list right">
            {links.map((item)=>{
              return(
                <li key={uuidv4()}><Anilink className="footer-nav-link" fade to="/" key={uuidv4()}>{item.text}</Anilink></li>
              )
            })}
          </ul>
        </div>
        <div className="footer-social-wrap">
          {socialIcons.map((item)=>{
            return(
              <a key={uuidv4()} className="footer-social-icon" href={item.url} target="_blank" rel="noreferrer">
                {item.icon}
              </a>
            )
          })}
        </div>
        <small className="footer-copyright">Copyright &copy; {new Date().getFullYear()}</small>
      </div>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  margin-top: auto;
  margin-bottom: var(--space-sm);

  .footer-newsletter {

  }

  .footer-nav-wrap {

    .footer-logo-wrap {
      width: 180px;
      display: block;
      margin: 0 auto;
      margin-bottom: var(--space-lg);
      
      .footer-logo {
        margin: 0;
      }
    }

    .footer-nav-list {
      list-style-type: none;
      display: flex;
      justify-content: center;
      margin: 0;
      margin-top: var(--space-sm);

      &.left {

      }

      &.right {

      }

      .footer-nav-link {
        display: flex;
        align-items: center;
        text-transform: capitalize;
        padding: 0 var(--space-md);
        font-size: var(--text-lg);
      }
    }
  }

  .footer-social-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: var(--space-lg);

    .footer-social-icon {
      padding: 0 var(--space-xs);

      svg {
        width: 55px;
        height: 55px
      }
    }
  }

  .footer-copyright {
    text-align: center;
    display: block;
    margin-top: var(--space-xl);
    font-size: var(--text-sm);
  }
`

export default Footer
