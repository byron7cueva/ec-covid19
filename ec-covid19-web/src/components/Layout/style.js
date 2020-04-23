import styled from 'styled-components'

import { devices } from '../../settings/constants'

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2em 4%;

  .grid {
    display: grid;
    grid-template-columns: 1fr 30em 30em;
    grid-gap: 2em 1em;
    padding-bottom: 2em;
  }

  @media ${devices.laptop} {
    .grid {
      grid-template-columns: 1fr 30em;

      &__charts {
        display: flex;
        grid-row: 2;
        grid-column: 1 / span 2;
      }
    }
  }

  @media ${devices.tablet} {
    .grid {
      grid-template-columns: 1fr;
      grid-gap: 0;

      &__charts {
        display: block;
      }
    }
  }

  @media ${devices.mobile} {
    margin: 1em;
  }
`
