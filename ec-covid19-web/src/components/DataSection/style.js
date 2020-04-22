import styled from 'styled-components'

import { devices } from '../../settings/constants'

export const DataContainer = styled.section`
  display: flex;
  width: 100%;

  .data-section__content {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  @media ${devices.laptop} {
    flex-direction: column;
    .data-section__content--lp {
      flex-direction: row;
    }
  }
`