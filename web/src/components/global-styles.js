import { createGlobalStyle } from 'styled-components'
import 'normalize.css'

export const GlobalStyles = createGlobalStyle`

  :root {
    --black: #333333;
    --white: #ffffff;
    --primary: #ffd83a;
    --primary-transparent: rgba(255, 217, 58, 0.1);
    --secondary: #e76356;
    --secondary-transparent: rgba(231, 99, 86, 0.55);
    --lifestyle: #4a9c47;
    --lifestyle-transparent: rgba(74, 156, 71, 0.1);
    --food: #e76356;
    --food-transparent: rgba(231, 99, 86, 0.55);
    --travel: #1984b5;
    --travel-transparent: rgba(25, 132, 181, 0.1);
    --border: 3px solid var(--black);
    --mainTransition: 0.5s ease;
    --mainShadow: 2px 2px 8px rgba(0,0,0,0.3);
    --mainSpacing: 1.3px;
    --space-unit:  1em;
    --space-xxxxs: calc(0.125 * var(--space-unit)); 
    --space-xxxs:  calc(0.25 * var(--space-unit));
    --space-xxs:   calc(0.375 * var(--space-unit));
    --space-xs:    calc(0.5 * var(--space-unit));
    --space-sm:    calc(0.75 * var(--space-unit));
    --space-md:    calc(1.25 * var(--space-unit));
    --space-lg:    calc(2 * var(--space-unit));
    --space-xl:    calc(3.25 * var(--space-unit));
    --space-xxl:   calc(5.25 * var(--space-unit));
    --space-xxxl:  calc(8.5 * var(--space-unit));
    --space-xxxxl: calc(13.75 * var(--space-unit));
    --text-base-size: 1em;
    --text-scale-ratio: 1.22;
    --text-xs: calc((1em / var(--text-scale-ratio)) / var(--text-scale-ratio));
    --text-sm: calc(var(--text-xs) * var(--text-scale-ratio));
    --text-md: calc(var(--text-sm) * var(--text-scale-ratio));
    --text-lg: calc(var(--text-md) * var(--text-scale-ratio));
    --text-xl: calc(var(--text-lg) * var(--text-scale-ratio));
    --text-xxl: calc(var(--text-xl) * var(--text-scale-ratio));
    --text-xxxl: calc(var(--text-xxl) * var(--text-scale-ratio));
    --line-height-multiplier: 1.5;
    --body-line-height: calc((var(--text-scale-ratio)) * var(--line-height-multiplier));
    --heading-line-height: calc((var(--text-scale-ratio) * 0.8) * var(--line-height-multiplier));
    --break-sm: (min-width: 480px);
    --break-md: (min-width: 768px);
    --break-lg: (min-width: 992px);
    --break-xl: (min-width: 1200px);
  }

  /* Global 
  ----------------------------------------------- */

  body {
    color: var(--black);
    background: var(--white);
    font-size: var(--text-md);
  }

  a {
    text-decoration: none;
    background: none;
    color: var(--black);
  }

  /* Typography 
  ----------------------------------------------- */

  body {
    font-size: var(--text-base-size);
    font-family: 'Lora', serif;
    line-height: var(--body-line-height);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Varela Round', sans-serif;
    text-transform: capitalize;
    line-height: var(--heading-line-height);
  }

  /* Container 
  ----------------------------------------------- */

  .container {
    margin: 0 auto;
    padding: 0 14px;
    max-width: 450px;
  }


  /* Button 
  ----------------------------------------------- */

  .btn {
    background-color: var(--primary);
    border: var(--border);
    padding: 1rem 2rem;
    transition: var(--defaultTransition);
    border-radius: 8px;
    text-transform: capitalize;
    font-weight: bold;
    text-shadow: none;
    letter-spacing: var(--mainSpacing);
    font-size: var(--text-lg);
  }
  .btn:hover {
    background-color: var(--secondary);
    color: var(--white);
    cursor: pointer;
  }
  .btn-secondary {
    background-color: var(--travel);
    color: var(--white);
  }
  .btn-secondary:hover {
    background-color: var(--lifestyle);
  }
`;