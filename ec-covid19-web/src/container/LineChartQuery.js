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
        getHistoryCasesOfPlace(placeCode: "${placeCode}") {
          caseDate
          confirmed
          dead
          healed
        }
      }
    `
    request('/api', query)
    .then(data => {
      const historyCases = data.getHistoryCasesOfPlace
      let result = null
      if ( historyCases.length > 0 ) {
        const confirmed = { id: 'Confirmados', color: colors.confirmed, data: []}
        const dead = { id: 'Fallecidos', color: colors.dead, data: []}
        const healed = { id: 'Recuperados', color: colors.healed, data: []}
      
        historyCases.forEach(hisCas => {
          confirmed.data.push({x: hisCas.caseDate, y: hisCas.confirmed})
          dead.data.push({x: hisCas.caseDate, y: hisCas.dead})
          healed.data.push({x: hisCas.caseDate, y: hisCas.healed})
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