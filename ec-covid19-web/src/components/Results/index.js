import React from 'react'
import PropTypes from 'prop-types'

import { ResultsContainer } from './style'
import { ItemResult } from '../ItemResult'
import { colors } from '../../settings/charts'

export const Results = ({ placeName, data }) => (
    <ResultsContainer>
      <h2>{placeName}</h2>
      <div className='results__numbers'>
        <ItemResult total={data? data.ConfirmedCases.healed : 0} description='Recuperados' color={colors.healed} />
        <ItemResult total={data? data.ConfirmedCases.dead : 0} description='Muertos' color={colors.dead} />
        <ItemResult total={data? data.ConfirmedCases.confirmed : 0} description='Confirmados' color={colors.actived} />
      </div>
    </ResultsContainer>
)

Results.propTypes = {
  placeName: PropTypes.string,
  statistics: PropTypes.object
}