import styled from 'styled-components'
import { colors, devices } from '../../settings/constants'

export const TableContainer = styled.article`
  width: 100%;
  height: 30vh;
  margin: 1em 0 2em;

  @media ${devices.tablet} {
      height: 50vh;
  }

  table {
    width: 100%;
    display: flex;
    flex-flow: column;
    height: 100%;

    td {
      text-align: center;
    }
  }

  thead {
    display: table;
    table-layout: fixed;
    flex: 0 0 auto;
    width: 100%;
  }

  td:first-child, th:first-child {
      width: 50px;
      text-align: left;
  }

  td:nth-child(2), th:nth-child(2) {
      width: 50%;
      text-align: left;
  }

  td:last-child {
      text-align: right;
  }

  tbody {
    flex: 1 1 auto;
    display: block;
    overflow-y: auto;
    tr {
      width: 100%;
      display: table;
      table-layout: fixed;
      border: 1px solid transparent;
    }
    tr:nth-child(odd) {
      background-color: #424874;
    }
    tr:hover, tr.selected {
      color: ${colors.light};
      cursor: pointer;
      border: 1px solid ${colors.light};
      font-weight: 500;
    }
  }
`

export const Label = styled.span`
  display: inline-block;
  border: 1px solid ${props => props.color};
  border-radius: 24px;
  padding: 0 1em;
`