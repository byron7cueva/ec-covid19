import styled from 'styled-components'

import { devices } from '../../settings/constants'

export const Main = styled.main`
  display: flex;
  width: 100%;
  padding: 1em 10%;

  @media ${devices.laptop} {
    padding: 1em 2em;
  }

  @media ${devices.tablet} {
    flex-direction: column;
  }

  @media ${devices.mobileLandscape} {
    padding: 1em;
  }

  @media ${devices.mobile} {
    padding: 0.5em 0;
  }
`
