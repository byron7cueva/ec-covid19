import { patternScale, colors } from '../settings/charts'
import { placeType } from './constants'

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

export const capitalize = d => {
  if (d.placeTypeId > placeType.region) {
    const words = d.placeName.split(' ')
    let result = ''
    words.forEach( word => result += `${word[0].toUpperCase()}${word.slice(1).toLowerCase()} `)
    return result
  }
  return d.placeName
}
