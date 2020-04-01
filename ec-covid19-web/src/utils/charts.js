import { patternScale, colors } from '../settings/charts'

export const getStyleScale = confirmed => {
  const infected = confirmed || 0
  const scale = patternScale.find( s => infected <= s.numInfects )
  return scale;
}

export const createDataHistory = (historyCases, daily = false) => {
  if ( historyCases.length === 0 ) return null

  const confirmed = { id: 'Confirmados', color: colors.confirmed, data: []}
  const dead = { id: 'Fallecidos', color: colors.dead, data: []}
  const healed = { id: 'Alta Hospitalaria', color: colors.healed, data: []}
    
  historyCases.forEach(hisCas => {
    confirmed.data.push({x: hisCas.caseDate, y: daily ? hisCas.confirmed : hisCas.totalConfirmed})
    dead.data.push({x: hisCas.caseDate, y: daily ? hisCas.dead : hisCas.totalDead })
    healed.data.push({x: hisCas.caseDate, y: daily ? hisCas.healed : hisCas.totalHealed})
  })
  return [confirmed, dead, healed]
}
