import styled from 'styled-components'

import { devices } from '../../settings/constants'

export const LineChartContainer = styled.article`
  position: relative;
  height: 31vh;
  width: 100%;

  @media ${devices.tablet} {
      height: 50vh;
  }
`