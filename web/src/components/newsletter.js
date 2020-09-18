import styled from 'styled-components'
import React from 'react'

export const Newsletter = () => {
  return (
    <StyledNewsletter>
      <h5 className="newsletter-title">
        subscribe to my free newsletter for updates!
      </h5>
      <form>
        <label htmlFor="email" className="newsletter-label">email:</label>
        <div className="newsletter-input-group">
          <input className="newsletter-input" type="email" placeholder="Enter your email" />
          <button className="btn btn-secondary newsletter-btn">subscribe</button>
        </div>
      </form>
    </StyledNewsletter>
  )
}

const StyledNewsletter = styled.div`
  margin: 0 auto;
  margin-bottom: var(--space-xxl);
  max-width: 450px;

  @media (min-width: 768px) {
    margin-bottom: var(--space-xxxl);
  }

  .newsletter-title {
    font-size: var(--text-xl);
    margin-bottom: var(--space-md);
    text-align: center;
  }

  .newsletter-label {
    text-align: left;
    display: block;
    text-transform: capitalize;
    margin-bottom: var(--space-xxs);
    font-weight: bold;
    margin-left: var(--space-xxs);
  }

  .newsletter-input-group {
    position: relative;
    display: flex;
    flex-direction: column;
  }

  .newsletter-input {
    border: var(--border);
    border-radius: 5px;
    padding: var(--space-sm);
  }

  .newsletter-btn {
    margin-top: var(--space-lg);
  }
`

export default Newsletter