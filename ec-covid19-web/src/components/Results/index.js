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
          <p>{new moment(parseInt(data.ConfirmedCases.updateDate)).add(-1, 'hours').format('DD/MM - HH:mm')}</p>
          <div className='results__numbers'>
            <ItemResult total={data.ConfirmedCases.healed} description='Recuperados' color={colors.healed} />
            <ItemResult total={data.ConfirmedCases.dead} description='Fallecidos' color={colors.dead} />
            <ItemResult total={data.ConfirmedCases.confirmed} description='Confirmados' color={colors.confirmed} />
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