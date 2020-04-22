import styled from 'styled-components'
import { devices } from '../../settings/constants'

export const ResultsContainer = styled.article`
  grid-area: result;
  text-align: center;
  padding: 0 5%;
  h2, p {
    margin: 0 0 0.3em;
  }

  .results__numbers {
    display: flex;
    justify-content: space-between;
  }

  @media ${devices.laptop} {
    padding: 0;
  }

  @media ${devices.mobileLandscape} {
    padding: 0;
  }
`