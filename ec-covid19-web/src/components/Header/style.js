import styled from 'styled-components'

import { fonts } from '../../settings/constants'

export const HeaderContainer = styled.header`
  grid-area: header;
  display: flex;
  align-items: center;
  justify-content: center;

  .header__title {
    margin:0;
    font-family: ${fonts.title.family};
    font-size: 1.5em;
    font-weight: ${fonts.title.weight};
  }
`
