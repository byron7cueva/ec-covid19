import styled from 'styled-components'

export const ItemResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  h3 {
    font-size: 2em;
    margin: 0;
    color: ${props => props.color};
  }
  p {
    margin: 0;
  }
`
