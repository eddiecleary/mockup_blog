import React from 'react'
import '../scss/newsletter.scss'

export const Newsletter = () => {
  return (
    <div className="newsletter">
      <h5 className="newsletter__title">
        subscribe to my free newsletter for updates and news!
      </h5>
      <form>
        <label htmlFor="email" className="newsletter__label">email:</label>
        <div className="newsletter__inputGroup">
          <input className="newsletter__input" type="email" placeholder="Enter your email" />
          <button className="btn btn-secondary newsletter__button">subscribe</button>
        </div>
      </form>
    </div>
  )
}

export default Newsletter