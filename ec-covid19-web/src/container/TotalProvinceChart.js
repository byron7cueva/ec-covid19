import React, { useState, useEffect } from 'react'

import { BarChart } from '../components/BarChart'

import { placeType } from '../utils/constants'

export const TotalProvinceChart = ({ totalCases }) => {
  const [data,setData] = useState([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    let result = totalCases.filter(item => item.placeTypeId === placeType.province)
    result = result.sort((a, b) => {
      return a.placeName < b.placeName ? 1 : -1
    })
    setData(result)
    setLoading(false)
  }, [totalCases])

  return (
    <BarChart data={data} loading={loading} title='Total de casos por provincia' height='40em'/>
  )
}
