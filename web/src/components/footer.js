import React from 'react'
import socialIcons from '../constants/social-icons'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Dot from './dot.js'
import links, {blogLinks} from '../constants/links'
import LogoSvg from '../images/svg/logo.svg'
import {v4 as uuidv4} from 'uuid'
import Newsletter from '../components/newsletter'
import styled from 'styled-components'
// import BackBtn from './backBtn'

export const Footer = () => {
  return (
    <>
      <StyledFooter>
        <div className='container'>

          <div className='footer-newsletter'>
            <Newsletter />
          </div>

          <div className='footer-nav-wrap'>
            <AniLink className='footer-logo-wrap' fade to='/'>
              <LogoSvg />
            </AniLink>
            <ul className='footer-nav-list left'>
              {blogLinks.map((item) => {
                return (
                  <li key={uuidv4()}><AniLink className='footer-nav-link' fade to={item.path} key={uuidv4()}><Dot color={item.color} />{item.text}</AniLink></li>
                )
              })}
            </ul>
            <ul className='footer-nav-list right'>
              {links.map((item) => {
                return (
                  <li key={uuidv4()}><AniLink className='footer-nav-link' fade to={item.path} key={uuidv4()}>{item.text}</AniLink></li>
                )
              })}
            </ul>
          </div>
          <div className='footer-social-wrap'>
            {socialIcons.map((item) => {
              return (
                <a key={uuidv4()} aria-label={item.aria} className='footer-social-icon' href={item.url} target='_blank' rel='noreferrer'>
                  {item.icon}
                </a>
              )
            })}
          </div>
          <small className='footer-copyright'>Copyright &copy; {new Date().getFullYear()}</small>
        </div>
      </StyledFooter>
      {/* <BackBtn /> */}
    </>
  )
}

const StyledFooter = styled.footer`
  margin-top: auto;
  margin-bottom: var(--space-sm);

  .footer-newsletter {

  }

  .footer-nav-wrap {

    @media (min-width: 992px) {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .footer-logo-wrap {
      width: 180px;
      display: block;
      margin: 0 auto;
      margin-bottom: var(--space-lg);

      @media (min-width: 992px) {
        margin: 0;
      }

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

        @media (min-width: 992px) {

          .footer-nav-link {
            margin-left: var(--space-lg);
          }
        }
      }

      &.right {

        @media (min-width: 992px) {
          .footer-nav-link {
            margin-left: var(--space-md);
          }
        }
      }

      .footer-nav-link {
        display: flex;
        align-items: center;
        text-transform: capitalize;
        padding: 0 var(--space-md);
        font-size: var(--text-lg);

        @media (min-width: 992px) {
           padding: 0;
           margin-left: var(--space-md);
        }
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

    @media (min-width: 992px) {
      margin-top: var(--space-lg);
    }
  }
`

export default Footer
