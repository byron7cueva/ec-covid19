import styled from 'styled-components'

import { colors, devices } from '../../settings/constants'

export const MenuButtonContainer = styled.button`
  z-index: 2;
  display: none;
  position: fixed;
  bottom: 1em;
  right: 1em;
  width: 4em;
  height: 4em;
  background-color: ${colors.first};
  border: none;
  border-radius: 50%;
  box-shadow: 3px 3px 30px rgba(1, 10, 67, 0.5);
  outline: none;

  @media ${devices.tablet} {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`