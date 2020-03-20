import styled from 'styled-components'

export const Main = styled.main`
  display: grid;
  height: 80vh;
  width: 100%;
  grid-template: 1fr 100px / 2fr 1fr;
  grid-template-areas: "map data"
             "timeline data";
`
