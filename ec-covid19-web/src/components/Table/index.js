import React, { useMemo, useEffect, useRef, useState } from 'react'
import { useTable } from 'react-table'

import { TableContainer, Label } from './style'
import { colors } from '../../settings/charts'

export const Table = ({data, onRowClick, selectedPlace }) => {
  const columns = useMemo (
    () => [
      { Header: 'Provincia', accessor: 'placeName' },
      { 
        Header: 'Confirmados',
        id: 'actived',
        accessor: d => (
          <Label color={colors.actived}>{d.ConfirmedCases.confirmed? d.ConfirmedCases.confirmed : 0}</Label>
        )
      }
    ], []
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({ columns, data})

  const tbodyEl = useRef(null)
  const [trSelected, setTrSelected] = useState(null)

  useEffect(() => {
    if (selectedPlace.placeCode) {
      if (trSelected) {
        tbodyEl.current.querySelector(trSelected).classList.remove('selected')
      }
      const id = `#row-${selectedPlace.placeCode}`
      setTrSelected(id)
      tbodyEl.current.querySelector(id).classList.add('selected')
    }
  }, [selectedPlace])

  return (
    <TableContainer>
      <table {...getTableProps()}>
        <thead>
          {
            headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>
                  {column.render('Header')}
                </th>
              ))}
            </tr>
            ))
          }
        </thead>
        <tbody {...getTableBodyProps} ref={tbodyEl}>
          {rows.map((row, i) => {
            prepareRow(row)
            return (
              <tr id={`row-${row.original.placeCode}`} {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()} onClick={() => onRowClick(row.original)}>{cell.render('Cell')}</td>
                ))}
              </tr>
            )
          })}
        </tbody>
      </table>
    </TableContainer>
  )
}
