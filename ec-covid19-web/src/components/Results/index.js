import React from 'react'
import PropTypes from 'prop-types'

import { ResultsContainer } from './style'
import { ItemResult } from '../ItemResult'
import { colors } from '../../settings/charts'

export const Results = ({ data }) => {
  const dateNow = new Date().toISOString().slice(0,10)
  const isNow = dateNow === data.casedate
  return (
    <ResultsContainer>
      { data ? (
        <>
          <h2>{data.placeName}</h2>
          <h4>{data.casedate}</h4>
          <div className='results__numbers'>
            <ItemResult total={data.totalhealed} daily={isNow ? data.healed : '-'} description='Alta Hospitalaria' color={colors.healed} />
            <ItemResult total={data.totaldead} daily={isNow ? data.dead : '-'} description='Fallecidos' color={colors.dead} />
            <ItemResult total={data.totalconfirmed} daily={isNow ? data.confirmed : '-'} description='Confirmados' color={colors.confirmed} />
          </div>
        </>
        )
        : null
      }
    </ResultsContainer>
  )
}

Results.propTypes = {
  placeName: PropTypes.string,
  statistics: PropTypes.object
}