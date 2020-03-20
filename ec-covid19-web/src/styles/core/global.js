import { createGlobalStyle } from 'styled-components'

import { colors, fonts, size } from '../../settings/constants'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  *:focus { outline: none; }

  html, body {
    margin: 0;
    padding: 0;
  }

  body {
    color: ${colors.light};
    background-color: ${colors.grayDark};
    font-family: ${fonts.content.family};
    font-weight: ${fonts.content.weight};
    font-size: ${size.textContent};
    padding: 1em 10em;
  }

  a {
    text-decoration: none;
    color: ${colors.light};
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
`
