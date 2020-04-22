import styled from 'styled-components'

export const ChartContainer = styled.article`
  display: flex;
  flex-direction: column;
  position: relative;
  height: ${props => props.height};
  width: 100%;
  padding: 0 1em;
  margin-bottom: 2em;
`