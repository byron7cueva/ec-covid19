import React from 'react'
import PropTypes from 'prop-types'

import { ResultsContainer } from './style'
import { ItemResult } from '../ItemResult'
import { colors } from '../../settings/charts'

export const Results = ({ data }) => (
    <ResultsContainer>
      { data ? (
        <>
          <h2>{data.placeName}</h2>
          <h4>{data.casedate}</h4>
          <div className='results__numbers'>
            <ItemResult total={data.totalhealed} description='Alta Hospitalaria' color={colors.healed} />
            <ItemResult total={data.totaldead} description='Fallecidos' color={colors.dead} />
            <ItemResult total={data.totalconfirmed} description='Confirmados' color={colors.confirmed} />
          </div>
        </>
        )
        : null
      }
    </ResultsContainer>
)

Results.propTypes = {
  placeName: PropTypes.string,
  statistics: PropTypes.object
}