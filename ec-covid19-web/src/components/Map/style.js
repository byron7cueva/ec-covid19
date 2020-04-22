import styled from 'styled-components'

import { devices } from '../../settings/constants'

export const MapContainer = styled.article`
  position: relative;
  height: 43em;
  width: 100%;

  @media ${devices.mobileLandscape} {
    height: 33em;
  }

  @media ${devices.mobile} {
    height: 25em;
  }
`
