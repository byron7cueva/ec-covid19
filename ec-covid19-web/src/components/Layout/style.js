import styled from 'styled-components'

export const Main = styled.main`
  display: grid;
  height: 90vh;
  width: 100%;
  grid-template: 1fr / 1fr 1fr;
  grid-template-areas: "data map";
  grid-gap: 2em;
`
