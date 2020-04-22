import styled from 'styled-components'

import { fonts } from '../../settings/constants'

export const HeaderContainer = styled.header`
  display: block;
  text-align: center;
  padding-top: 1.5em;

  img {
    width: 2.5em;
    margin-right: 1em;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .header__title {
    margin:0;
    font-family: ${fonts.title.family};
    font-size: 1.5em;
    font-weight: ${fonts.title.weight};
  }
`
