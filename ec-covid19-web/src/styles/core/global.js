import { createGlobalStyle } from 'styled-components'

import { colors } from '../../settings/constants'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
  }

  body {
    color: ${colors.light};
    background-color: ${colors.grayDark};
  }
`
