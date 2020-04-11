import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import { ResultsContainer } from './style'
import { ItemResult } from '../ItemResult'
import { colors } from '../../settings/charts'

export const Results = ({ data }) => {
  const dateNow = moment(new Date()).format('YYYY-MM-DD')
  const isNow = dateNow === data.casedate
  return (
    <ResultsContainer>
      { data ? (
        <>
          <h2>{data.placeName}</h2>
          <h4>{data.casedate}</h4>
          <div className='results__numbers'>
            <ItemResult total={data.totalhealed} daily={isNow ? data.healed : 0} description='Alta Hospitalaria' color={colors.healed} />
            <ItemResult total={data.totaldead} daily={isNow ? data.dead : 0} description='Fallecidos' color={colors.dead} />
            <ItemResult total={data.totalconfirmed} daily={isNow ? data.confirmed : 0} description='Confirmados' color={colors.confirmed} />
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