import styled from 'styled-components'
import { devices } from '../../settings/constants'

export const ResultsContainer = styled.article`
  text-align: center;
  h2, p {
    margin: 0 0 0.3em;
  }

  .results__numbers {
    display: flex;
    justify-content: space-between;
    padding: 0 5em;
  }

  @media ${devices.mobileLandscape} {
    .results__numbers {
      padding: 0 1em;
    }
  }
`