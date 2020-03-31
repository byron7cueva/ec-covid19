import React, { useState, useEffect } from 'react'
import { request } from 'graphql-request'

import { LineChart } from '../components/LineChart'
import { colors } from '../settings/charts'

export const LineChartQuery = ({ placeCode }) => {
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
      let result = null
      if ( historyCases.length > 0 ) {
        const confirmed = { id: 'Confirmados', color: colors.confirmed, data: []}
        const dead = { id: 'Fallecidos', color: colors.dead, data: []}
        const healed = { id: 'Alta Hospitalaria', color: colors.healed, data: []}
      
        historyCases.forEach(hisCas => {
          confirmed.data.push({x: hisCas.caseDate, y: hisCas.totalConfirmed})
          dead.data.push({x: hisCas.caseDate, y: hisCas.totalDead})
          healed.data.push({x: hisCas.caseDate, y: hisCas.totalHealed})
        })
        result = [confirmed, dead, healed]
      }
      setHistory(result)
      setLoading(false)
    })
    .catch(error => {
      setHistory(null)
      setLoading(false)
    }) 
  }, [ placeCode ] )
  return (
    <LineChart data={history} loading={isLoading} />
  )
}