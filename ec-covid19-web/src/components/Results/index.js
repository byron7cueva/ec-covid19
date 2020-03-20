import React from 'react'
import PropTypes from 'prop-types'

import { ResultsContainer } from './style'
import { ItemResult } from '../ItemResult'
import { colors } from '../../settings/charts'

export const Results = ({ placeName, statistics }) => (
    <ResultsContainer>
      <h2>{placeName}</h2>
      <div className='results__numbers'>
        <ItemResult total={statistics.healed} description='Recuperados' color={colors.healed} />
        <ItemResult total={statistics.dead} description='Muertos' color={colors.dead} />
        <ItemResult total={statistics.infected} description='Infectados' color={colors.infected} />
        <ItemResult total={statistics.actived} description='Activos' color={colors.actived} />
      </div>
    </ResultsContainer>
)

Results.propTypes = {
  placeName: PropTypes.string,
  statistics: PropTypes.object
}