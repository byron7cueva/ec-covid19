import React, { useState, useEffect } from 'react'
import { request } from 'graphql-request'

import { LineChart } from '../components/LineChart'
import { createDataHistory } from '../utils/charts'

export const DailyHistoryChart = ({ placeCode, placeName }) => {
  const [ history, setHistory ] = useState([])
  const [ isLoading, setLoading ] = useState(false)

  useEffect(() => {
    setLoading(true)
    const query = `
      query {
        getDailyHitoryCases(placeCode: "${placeCode}"){
          caseDate
          confirmed
          dead
          healed
        }
      }
    `
    request('/api', query)
    .then(data => {
      const historyCases = data.getDailyHitoryCases
      let result = createDataHistory(historyCases, true)
      setHistory(result)
      setLoading(false)
    })
    .catch(error => {
      setHistory(null)
      setLoading(false)
    }) 
  }, [ placeCode ] )
  return (
    <LineChart data={history} loading={isLoading} title={`Casos diarios de ${placeName}`} height='25em'/>
  )
}