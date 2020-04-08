import styled from 'styled-components'

import { devices } from '../../settings/constants'

export const MapContainer = styled.article`
  position: relative;
  height: 63em;
  width: 50%;

  @media ${devices.laptop} {
    height: 55em;
    padding: 0;
    width: 100%;
  }

  @media ${devices.tablet} {
    height: 50em;
  }

  @media ${devices.mobileLandscape} {
    height: 40em;
  }

  @media ${devices.mobile} {
    height: 25em;
  }
`
