import styled from 'styled-components'

import { colors } from '../../settings/constants'

export const ItemResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  h3, h5 {
    color: ${props => props.color};
  }
  h3 {
    font-size: 3em;
    margin: 0;
  }
  h5 {
    font-size: 1.2em;
    margin: 0;
  }
  p {
    margin: 0;
  }

  .item-result__total {
    display: flex;
    align-items: center;
  }

  .item-result__now {
    margin-left: 0.5em;
    padding-left: 0.5em;
    border-left: 1px solid ${colors.gray};
  }
`
