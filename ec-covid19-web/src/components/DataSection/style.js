import styled from 'styled-components'

import { devices } from '../../settings/constants'

export const DataContainer = styled.section`
  width: 50%;
  padding-left: 2em;

  @media ${devices.tablet} {
    width: 100%;
    padding: 0;
  }
`