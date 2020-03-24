import styled from 'styled-components'

import { fonts } from '../../settings/constants'

export const HeaderContainer = styled.header`
  display: block;
  text-align: center;

  .header__title {
    margin:0;
    font-family: ${fonts.title.family};
    font-size: 1.5em;
    font-weight: ${fonts.title.weight};
  }

  p {
    margin: 0;
  }
`
