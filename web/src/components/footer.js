import React from 'react'
import '../scss/footer.scss'
import socialIcons from '../constants/social-icons'
import Anilink from 'gatsby-plugin-transition-link/Anilink'
import Dot from './dot.js'
import links from '../constants/links'
import {blogLinks} from '../constants/links'
import logo from '../images/logo.svg'
import {v4 as uuidv4} from 'uuid'

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__navWrap">
          <Anilink className="footer__logoWrap" fade to="/">
            <img className="footer__logo" src={logo} alt="Amelia Pond Logo - cursive writing of her name"/>
          </Anilink>
          <ul className="footer__navList footer__navList--left">
            {blogLinks.map((item)=>{
              return(
                <li key={uuidv4()}><Anilink className="footer__navLink" fade to={item.path} key={uuidv4()}><Dot color={item.color} />{item.text}</Anilink></li>
              )
            })}
          </ul>
          <ul className="footer__navList footer__navList--right">
            {links.map((item)=>{
              return(
                <li key={uuidv4()}><Anilink className="footer__navLink" fade to={item.path} key={uuidv4()}>{item.text}</Anilink></li>
              )
            })}
          </ul>
        </div>
        <div className="footer__socialWrap">
          {socialIcons.map((item)=>{
            return(
              <a key={uuidv4()} className="footer__socialIcon" href={item.url} target="_blank" rel="noreferrer">
                {item.icon}
              </a>
            )
          })}
        </div>
        <small className="footer__copyright">Copyright &copy; {new Date().getFullYear()}</small>
      </div>
    </footer>
  )
}

export default Footer
