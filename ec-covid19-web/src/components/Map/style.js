import styled from 'styled-components'

import { devices } from '../../settings/constants'

export const MapContainer = styled.article`
  height: 63em;
  width: 50%;

  @media ${devices.laptop} {
    height: 50em;
    padding: 0 1em;
    width: 100%;
  }

  @media ${devices.tablet} {
    height: 40em;
  }

  @media ${devices.mobileLandscape} {
    height: 25em;
  }

  @media ${devices.mobile} {
    height: 20em;
  }
`
