import styled from 'styled-components'

import { devices } from '../../settings/constants'

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1em 4%;

  .flex {
    display: flex;
  }

  .w-50 {
    width: 50%;
  }

  @media ${devices.laptop} {
    display: block;
    .flex {
      flex-direction: column;
    }

    .w-50 {
      width: 100%;
    }
  }
`
