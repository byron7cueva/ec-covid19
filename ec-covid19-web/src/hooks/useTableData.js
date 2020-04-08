'use strict'

import { useState } from 'react'
import { placeType } from '../utils/constants'

export const useTableData = () => {
  const [dataTable, setData] = useState([])

  const setDataTable = totalCases => {
    const country = totalCases.find(item => item.placeTypeId === placeType.country)
    const region = totalCases.filter(item => {
      if (item.placeTypeId === placeType.region) {
        item.expanded = true
        return true
      }
      return false
    })
    
    const provinces = totalCases.filter(item => item.placeTypeId === placeType.province)
    provinces.forEach(prov => {
      prov.subRows = totalCases.filter(item => item.placeTypeId === placeType.canton && item.parentRegion === prov.placeCode)
    })
    
    region.forEach(reg => {
      reg.subRows = totalCases.filter(item => item.placeTypeId === placeType.province && item.parentRegion === reg.placeCode)
    })

    country.subRows = region
    country.expanded = true
    setData([country])
  }
  return [dataTable, setDataTable]
}