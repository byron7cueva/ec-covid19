import styled from 'styled-components'

export const ItemResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  h3 {
    font-size: 2em;
    margin: 0 0 0.3em;
    color: ${props => props.color};
  }
  p {
    margin: 0;
  }
`
