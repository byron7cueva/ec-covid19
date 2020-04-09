import styled from 'styled-components'

import { devices } from '../../settings/constants'

export const MapContainer = styled.article`
  position: relative;
  height: 53em;
  width: 100%;

  @media ${devices.laptop} {
    height: 55em;
    padding: 0;
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
