import { patternScale } from '../settings/charts'

export const getStyleScale = confirmed => {
  const infected = confirmed || 0
  const scale = patternScale.find( s => infected <= s.numInfects )
  return scale;
}