import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import { ResultsContainer } from './style'
import { ItemResult } from '../ItemResult'
import { colors } from '../../settings/charts'

export const Results = ({ data }) => (
    <ResultsContainer>
      { data ? (
        <>
          <h2>{data.placeName}</h2>
          <p>{data.casedate}</p>
          <div className='results__numbers'>
            <ItemResult total={data.totalhealed} description='Recuperados' color={colors.healed} />
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