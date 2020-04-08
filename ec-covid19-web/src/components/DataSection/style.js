import styled from 'styled-components'

import { devices } from '../../settings/constants'

export const DataContainer = styled.section`
  display: flex;
  width: 100%;

  @media ${devices.tablet} {
    flex-direction: column;
  }
`