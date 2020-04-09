import styled from 'styled-components'

import { devices, colors } from '../../settings/constants'

export const MenuContainer = styled.div`
  width: 100%;
  height: 30em;
  padding-bottom: 1em;

  @media ${devices.tablet} {
    z-index: 1;
    position: fixed;
    height: 100%;
    top: 0;
    left: 100%;
    bottom: 0;
    background-color: ${colors.grayDark};
    transition: left 1s 0.4s ease;
    will-change: left;

    &.show {
      left: 0;
    }
  }
`
