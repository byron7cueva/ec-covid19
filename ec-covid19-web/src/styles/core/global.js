import { createGlobalStyle } from 'styled-components'

import { colors, fonts, size, devices } from '../../settings/constants'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  *:focus { outline: none; }

  html, body, h4 {
    margin: 0;
    padding: 0;
  }

  body {
    color: ${colors.light};
    background-color: ${colors.grayDark};
    font-family: ${fonts.content.family};
    font-weight: ${fonts.content.weight};
    font-size: ${size.textContent};
    margin: 1.5em 0;
  }

  a {
    text-decoration: none;
    color: ${colors.alternative};
  }

  h4 {
    font-size: 1.3em;
  }

  .block-section {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    background-color: ${colors.grayDark};
  }

  ::-webkit-scrollbar-track
  {
	  box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	  background-color: #6e5773;
  }

  ::-webkit-scrollbar
  {
	  width: 10px;
	  background-color: #6e5773;
  }
  
  ::-webkit-scrollbar-thumb
  {
	  background-color: #d45d79;
	  border: 1px solid #555555;
  }

  @media ${devices.mobile} {
    body {
      margin: 1em;
    }
  }
`
