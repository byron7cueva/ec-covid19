import styled from 'styled-components'

export const LayoutContainer = styled.div`
  display: grid;
  height: 100vh;
  width: 100%;
  grid-template: 50px 1fr 100px 50px / 2fr 1fr;
  grid-template-areas: "header header"
             "map data"
             "timeline data"
             "footer footer";
  padding: 1em 5em;
`
