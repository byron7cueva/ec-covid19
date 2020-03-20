import { patternScale } from '../settings/charts'

export const getStyleScale = place => {
  const infected = place? place.infected : 0
  const scale = patternScale.find( s => infected <= s.numInfects )
  return scale;
}