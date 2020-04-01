import React, { useState, useEffect } from 'react'
import { request } from 'graphql-request'

import { LineChart } from '../components/LineChart'
import { createDataHistory } from '../utils/charts'

export const TotalHistoryChart = ({ placeCode, placeName }) => {
  const [ history, setHistory ] = useState([])
  const [ isLoading, setLoading ] = useState(false)

  useEffect(() => {
    setLoading(true)
    const query = `
      query {
        getTotalHistoryCases(placeCode: "${placeCode}"){
          caseDate
          totalConfirmed
          totalDead
          totalHealed
        }
      }
    `
    request('/api', query)
    .then(data => {
      const historyCases = data.getTotalHistoryCases
      let result = createDataHistory(historyCases)
      setHistory(result)
      setLoading(false)
    })
    .catch(error => {
      setHistory(null)
      setLoading(false)
    }) 
  }, [ placeCode ] )
  return (
    <>
      <h4>Total casos / día de {placeName}</h4>
      <LineChart data={history} loading={isLoading} />
    </>
  )
}