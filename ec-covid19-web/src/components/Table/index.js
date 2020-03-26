import React, { useMemo, useEffect, useRef, useState } from 'react'
import { useTable, useGroupBy, useExpanded } from 'react-table'
import { AiFillCaretRight, AiFillCaretDown } from 'react-icons/ai'
import moment from 'moment'

import { TableContainer, Label } from './style'
import { colors } from '../../settings/charts'

export const Table = ({data, onRowClick, selectedPlace }) => {
  const columns = useMemo (
    () => [
      {
        id: 'expander',
        Header: ({ getToggleAllRowsExpandedProps, isAllRowsExpanded }) => (
          <span {...getToggleAllRowsExpandedProps()}>
            { isAllRowsExpanded ? <AiFillCaretDown size={14} /> : <AiFillCaretRight size={14} />}
          </span>
        ),
        Cell: ({ row }) => (
          row.canExpand ? (
            <span
              {...row.getToggleRowExpandedProps({
                style: {
                  paddingLeft: `${row.depth * 2}rem`,
                },
              })}
            >
              {row.isExpanded ? <AiFillCaretDown size={14} /> : <AiFillCaretRight size={14} />}
            </span>
          ) : null
        )
      },
      { Header: 'Provincia', accessor: 'placeName' },
      {
        Header: 'Actualización',
        id: 'updateDate',
        accessor: d => (
          <span>{d.ConfirmedCases.updateDate ? new moment(parseInt(d.ConfirmedCases.updateDate)).format('DD/MM - HH:mm') : ''}</span>
        )
      },
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
    prepareRow,
    state: { expanded }
  } = useTable({ columns, data}, useExpanded )

  const tbodyEl = useRef(null)
  const [trSelected, setTrSelected] = useState(null)

  useEffect(() => {
    if (selectedPlace.placeCode) {
      if (trSelected) {
        const element = tbodyEl.current.querySelector(trSelected)
        if (element) element.classList.remove('selected')
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
                  <td {...cell.getCellProps()} onClick={() => onRowClick(row.original)}>
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            )
          })}
        </tbody>
      </table>
    </TableContainer>
  )
}
