import styled from 'styled-components'

import { devices } from '../../settings/constants'

export const MapContainer = styled.article`
  width: 50%;
  padding-right: 2em;

  @media ${devices.tablet} {
    width: 100%;
    height: 75vh;
    padding: 0;
  }

  @media ${devices.mobileLandscape} {
    height: 60vh;
  }

  @media ${devices.mobile} {
    height: 70vh;
  }
`
